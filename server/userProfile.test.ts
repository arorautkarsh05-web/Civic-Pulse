import { describe, expect, it } from "vitest";
import { validateUserContactProfile } from "../shared/userProfile";

const validProfile = { name: "Aarav Singh", email: "aarav@example.com", phone: "9876543210", area: "Gamma 1", consent: true };

describe("validateUserContactProfile", () => {
  it("accepts a complete profile with contact consent", () => {
    expect(validateUserContactProfile(validProfile)).toBeNull();
  });

  it("requires a valid contact path and affirmative consent", () => {
    expect(validateUserContactProfile({ ...validProfile, phone: "123" })).toBe("Enter a valid 10-digit phone number.");
    expect(validateUserContactProfile({ ...validProfile, consent: false })).toBe("Confirm that the assigned civic team may contact you about this complaint.");
  });
});
