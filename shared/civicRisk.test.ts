import { describe, expect, it } from "vitest";
import { calculateCivicRisk } from "./civicRisk";

describe("calculateCivicRisk", () => {
  it("selects the strongest category from local complaint patterns", () => {
    const result = calculateCivicRisk([{ category: "Garbage" }, { category: "Garbage" }, { category: "Streetlight" }]);
    expect(result.category).toBe("Garbage");
    expect(result.active).toBe(true);
    expect(result.score).toBe(78);
    expect(result.profile.team).toBe("Sanitation Response Team");
  });

  it("keeps the area in monitoring until any category has two reports", () => {
    const result = calculateCivicRisk([{ category: "Health risk" }, { category: "Pothole" }]);
    expect(result.active).toBe(false);
    expect(result.score).toBe(0);
  });
});
