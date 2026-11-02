export type AlertWeatherTheme = "clear" | "cloudy" | "rain" | "thunderstorm";

export function getIstGreeting(hour: number) {
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 22) return "Good evening";
  return "Good night";
}

export function buildWeatherAlert(input: { area: string; theme: AlertWeatherTheme; rainProbability: number; precipitation: number; waterloggingReports: number }) {
  const weatherRisk = input.theme === "rain" || input.theme === "thunderstorm" || input.rainProbability >= 50 || input.precipitation > 0;
  const urgent = input.theme === "thunderstorm" || input.rainProbability >= 70 || (input.waterloggingReports >= 2 && weatherRisk);
  const active = weatherRisk;
  const severity = urgent ? "HIGH PRIORITY" : "WEATHER WATCH";
  const rainDetail = input.rainProbability > 0 ? `${input.rainProbability}% rain probability in the next 6 hours` : `${input.theme === "thunderstorm" ? "thunderstorm" : "rainfall"} conditions detected`;
  return {
    active,
    urgent,
    severity,
    title: active ? `${input.area}: proactive rain alert` : `${input.area}: weather monitoring active`,
    reason: active ? `${rainDetail}${input.waterloggingReports ? ` with ${input.waterloggingReports} local waterlogging signal${input.waterloggingReports > 1 ? "s" : ""}` : ""}.` : "No rain-related trigger is currently active for this selected area.",
    action: urgent ? "Inspect drainage and pre-position pump response" : active ? "Inspect drains and keep field response ready" : "Continue routine weather monitoring",
  };
}
