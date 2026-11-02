import { describe, expect, it } from "vitest";
import { buildWeatherAlert, getIstGreeting } from "../shared/adminAlert";

describe("Admin greeting and weather alert logic", () => {
  it("uses the correct greeting for each IST time period", () => {
    expect(getIstGreeting(8)).toBe("Good morning");
    expect(getIstGreeting(14)).toBe("Good afternoon");
    expect(getIstGreeting(19)).toBe("Good evening");
    expect(getIstGreeting(2)).toBe("Good night");
  });

  it("raises a high-priority selected-area alert for rainy weather and local waterlogging signals", () => {
    const alert = buildWeatherAlert({ area: "Gamma 1", theme: "rain", rainProbability: 74, precipitation: 1.2, waterloggingReports: 2 });
    expect(alert.active).toBe(true);
    expect(alert.urgent).toBe(true);
    expect(alert.title).toContain("Gamma 1");
  });

  it("keeps a clear-weather area in monitoring", () => {
    const alert = buildWeatherAlert({ area: "Alpha 1", theme: "clear", rainProbability: 10, precipitation: 0, waterloggingReports: 0 });
    expect(alert.active).toBe(false);
    expect(alert.action).toBe("Continue routine weather monitoring");
  });
});
