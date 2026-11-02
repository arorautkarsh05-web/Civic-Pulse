import axios from "axios";

export type WeatherTheme = "clear" | "cloudy" | "rain" | "thunderstorm";

export function mapWeatherCondition(code: number, isDay: number): { label: string; theme: WeatherTheme } {
  if ([95, 96, 99].includes(code)) return { label: "Thunderstorm", theme: "thunderstorm" };
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { label: "Rain showers", theme: "rain" };
  if ([1, 2, 3, 45, 48].includes(code)) {
    return { label: code === 3 ? "Overcast" : code >= 45 ? "Foggy" : "Cloudy", theme: "cloudy" };
  }
  return { label: isDay ? "Clear skies" : "Clear night", theme: "clear" };
}

export async function fetchGreaterNoidaWeather() {
  const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=28.4744&longitude=77.5040&current=temperature_2m,apparent_temperature,weather_code,is_day,precipitation,wind_speed_10m&hourly=precipitation_probability&forecast_days=1&timezone=Asia%2FKolkata";
  const response = await axios.get(endpoint, { timeout: 12_000, headers: { Accept: "application/json" } });
  const payload = response.data;
  const current = payload.current;
  if (!current) throw new Error("Weather provider returned no current conditions");
  const meta = mapWeatherCondition(current.weather_code, current.is_day);
  const currentHourIndex = Math.max(0, payload.hourly?.time?.indexOf(current.time) ?? 0);
  const nextSixHours = payload.hourly?.precipitation_probability?.slice(currentHourIndex, currentHourIndex + 6) ?? [];
  const rainProbability = nextSixHours.length ? Math.max(...nextSixHours) : 0;
  return {
    temperature: Math.round(current.temperature_2m),
    apparent: Math.round(current.apparent_temperature),
    precipitation: current.precipitation ?? 0,
    rainProbability,
    wind: Math.round(current.wind_speed_10m ?? 0),
    label: meta.label,
    theme: meta.theme,
    observedAt: current.time,
    fetchedAt: Date.now(),
    source: "Open-Meteo",
  };
}
