import { describe, expect, it } from "vitest";
import { getDepartmentForCategory, listDepartments } from "../shared/departmentRouting";

describe("department routing", () => {
  it("maps every citizen issue category to its responsible response department", () => {
    expect(getDepartmentForCategory("Waterlogging").name).toBe("Drainage Response");
    expect(getDepartmentForCategory("Pothole").name).toBe("Road Works");
    expect(getDepartmentForCategory("Streetlight").name).toBe("Electrical Maintenance");
    expect(getDepartmentForCategory("Garbage").name).toBe("Sanitation Response");
    expect(getDepartmentForCategory("Health risk").name).toBe("Health Response");
  });

  it("exposes one department entry for each report category", () => {
    expect(listDepartments()).toHaveLength(5);
    expect(getDepartmentForCategory("Garbage").availability).toBe("High demand");
    expect(getDepartmentForCategory("Waterlogging").availability).toBe("Ready");
  });
});
