export type UserContactProfile = {
  name: string;
  email: string;
  phone: string;
  area: string;
  consent: boolean;
};

export function validateUserContactProfile(profile: UserContactProfile) {
  if (!profile.name.trim()) return "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(profile.email.trim())) return "Enter a valid email address.";
  if (!/^\d{10}$/.test(profile.phone.replace(/\D/g, ""))) return "Enter a valid 10-digit phone number.";
  if (!profile.area.trim()) return "Select your Greater Noida area.";
  if (!profile.consent) return "Confirm that the assigned civic team may contact you about this complaint.";
  return null;
}
