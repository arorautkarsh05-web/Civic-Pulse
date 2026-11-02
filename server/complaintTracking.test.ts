import { describe, expect, it } from "vitest";
import { createComplaintId, findComplaint, maskPhone } from "../shared/complaintTracking";

describe("complaint tracking", () => {
  it("creates the next stable Complaint ID shared across views", () => {
    expect(createComplaintId([{ id: "CP-2408" }, { id: "GN-CP-2414" }])).toBe("GN-CP-2415");
  });

  it("masks the reporter phone and finds a selected complaint by its shared ID", () => {
    const complaints = [{ id: "GN-CP-2415", title: "Streetlight" }];
    expect(maskPhone("9876543210")).toBe("•••• •••• 3210");
    expect(findComplaint(complaints, "GN-CP-2415")?.title).toBe("Streetlight");
  });
});
