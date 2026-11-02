import type { CivicDepartment } from "./departmentRouting";
import type { UserContactProfile } from "./userProfile";

export function attachComplaintContact(profile: UserContactProfile, area: string): UserContactProfile {
  return { ...profile, area };
}

export function fieldTeamContactGuidance(contact: UserContactProfile | undefined, department: CivicDepartment, dispatched: boolean) {
  if (!contact?.consent) return "No approved reporter contact details are available for this complaint.";
  if (!dispatched) return `${department.name} can contact ${contact.name} after the complaint is dispatched.`;
  return `Field-team handoff: ${department.name} may contact ${contact.name} before on-site verification.`;
}
