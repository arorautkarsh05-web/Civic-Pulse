import type { CivicCategory } from "./civicRisk";

export type CivicDepartment = {
  id: string;
  name: string;
  code: string;
  responsibility: string;
  availability: "Ready" | "On field duty" | "High demand";
  responseTarget: string;
  defaultInstruction: string;
};

export const departmentRouting: Record<CivicCategory, CivicDepartment> = {
  Waterlogging: { id: "drainage", name: "Drainage Response", code: "DRN", responsibility: "Drainage, waterlogging, and flood mitigation", availability: "Ready", responseTarget: "30 min", defaultInstruction: "Inspect drainage and pre-position pump response." },
  Pothole: { id: "roads", name: "Road Works", code: "RDW", responsibility: "Road hazards, potholes, and surface repair", availability: "On field duty", responseTarget: "4 hrs", defaultInstruction: "Inspect the road hazard and dispatch a repair crew." },
  Streetlight: { id: "electrical", name: "Electrical Maintenance", code: "ELC", responsibility: "Streetlights, feeder circuits, and electrical faults", availability: "Ready", responseTarget: "2 hrs", defaultInstruction: "Inspect the lighting circuit and restore affected streetlights." },
  Garbage: { id: "sanitation", name: "Sanitation Response", code: "SNT", responsibility: "Garbage collection, waste overflow, and cleaning", availability: "High demand", responseTarget: "2 hrs", defaultInstruction: "Deploy a sanitation vehicle and clear the waste accumulation." },
  "Health risk": { id: "health", name: "Health Response", code: "HLT", responsibility: "Public-health hazards, hygiene, and field inspection", availability: "Ready", responseTarget: "1 hr", defaultInstruction: "Dispatch a health and sanitation inspection team." },
};

export function getDepartmentForCategory(category: CivicCategory) {
  return departmentRouting[category];
}

export function listDepartments() {
  return Object.values(departmentRouting);
}
