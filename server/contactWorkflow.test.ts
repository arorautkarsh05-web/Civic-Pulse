import { describe, expect, it } from "vitest";
import { getDepartmentForCategory } from "../shared/departmentRouting";
import { attachComplaintContact, fieldTeamContactGuidance } from "../shared/contactWorkflow";

const contact = { name: "Aarav Singh", email: "aarav@example.com", phone: "9876543210", area: "Gamma 1", consent: true };

describe("complaint contact workflow", () => {
  it("stores a consented profile with the area actually reported", () => {
    expect(attachComplaintContact(contact, "Knowledge Park 2")).toMatchObject({ name: "Aarav Singh", area: "Knowledge Park 2", consent: true });
  });

  it("provides field-team guidance only when contact consent and dispatch are present", () => {
    const department = getDepartmentForCategory("Waterlogging");
    expect(fieldTeamContactGuidance(contact, department, true)).toContain("Field-team handoff");
    expect(fieldTeamContactGuidance({ ...contact, consent: false }, department, true)).toContain("No approved reporter contact details");
  });
});
