export type TrackableComplaint = { id: string };

export function createComplaintId(existing: TrackableComplaint[]): string {
  const largest = existing.reduce((max, complaint) => {
    const match = complaint.id.match(/(\d+)$/);
    return Math.max(max, match ? Number(match[1]) : 0);
  }, 2400);
  return `GN-CP-${String(largest + 1).padStart(4, "0")}`;
}

export function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 4 ? `•••• •••• ${digits.slice(-4)}` : "Protected";
}

export function findComplaint<T extends TrackableComplaint>(complaints: T[], complaintId: string | null): T | undefined {
  return complaints.find((complaint) => complaint.id === complaintId);
}
