export const civicCategories = ["Waterlogging", "Pothole", "Streetlight", "Garbage", "Health risk"] as const;
export type CivicCategory = (typeof civicCategories)[number];

export type RiskProfile = {
  category: CivicCategory;
  signalLabel: string;
  patternLabel: string;
  recommendation: string;
  team: string;
};

export const riskProfiles: Record<CivicCategory, RiskProfile> = {
  Waterlogging: { category: "Waterlogging", signalLabel: "Local waterlogging", patternLabel: "drainage bottleneck", recommendation: "Inspect drainage + pre-position 2 pumps", team: "Drainage Response Team" },
  Pothole: { category: "Pothole", signalLabel: "Local road hazards", patternLabel: "road-surface degradation", recommendation: "Dispatch road inspection + repair crew", team: "Road Works Team" },
  Streetlight: { category: "Streetlight", signalLabel: "Local lighting outages", patternLabel: "lighting outage cluster", recommendation: "Inspect feeder circuit + assign electrical crew", team: "Electrical Maintenance Team" },
  Garbage: { category: "Garbage", signalLabel: "Local waste complaints", patternLabel: "waste accumulation cluster", recommendation: "Deploy sanitation vehicle + waste collection team", team: "Sanitation Response Team" },
  "Health risk": { category: "Health risk", signalLabel: "Local health reports", patternLabel: "public-health concern cluster", recommendation: "Dispatch sanitation and health inspection team", team: "Health Response Team" },
};

export function calculateCivicRisk(reports: Array<{ category: CivicCategory }>) {
  const counts = civicCategories.reduce((result, category) => ({ ...result, [category]: reports.filter((report) => report.category === category).length }), {} as Record<CivicCategory, number>);
  const strongest = civicCategories.reduce((current, category) => counts[category] > counts[current] ? category : current, civicCategories[0]);
  const count = counts[strongest];
  const active = count >= 2;
  return {
    counts,
    active,
    category: strongest,
    count,
    score: active ? Math.min(94, 62 + count * 8) : 0,
    profile: riskProfiles[strongest],
  };
}
