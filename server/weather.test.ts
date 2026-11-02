import { describe, expect, it } from "vitest";
import { mapWeatherCondition } from "./weather";

describe("mapWeatherCondition", () => {
  it("classifies clear weather based on the day flag", () => {
    expect(mapWeatherCondition(0, 1)).toEqual({ label: "Clear skies", theme: "clear" });
    expect(mapWeatherCondition(0, 0)).toEqual({ label: "Clear night", theme: "clear" });
  });

  it("classifies cloudy, rainy, and thunderstorm weather codes", () => {
    expect(mapWeatherCondition(3, 1)).toEqual({ label: "Overcast", theme: "cloudy" });
    expect(mapWeatherCondition(63, 1)).toEqual({ label: "Rain showers", theme: "rain" });
    expect(mapWeatherCondition(95, 1)).toEqual({ label: "Thunderstorm", theme: "thunderstorm" });
  });
});
