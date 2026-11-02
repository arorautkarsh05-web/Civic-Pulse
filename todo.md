# CivicPulse UI Revision TODO

- [x] Replace the current initial screen with a polished role-login experience for User and Admin.
- [x] Add a clear Admin entry path that opens the operations dashboard after login.
- [x] Redesign the Admin dashboard with stronger depth, realistic 3D-inspired layers, and professional visual hierarchy.
- [x] Add a dedicated Complaints section where Admin can browse, filter, inspect, and manage all complaints.
- [x] Add an Admin reply/comment composer for each complaint.
- [x] Persist Admin replies in the frontend state for the current demo session.
- [x] Show Admin replies and complaint status updates in the User complaint view.
- [x] Verify the complete User report → Admin response → User reply flow on desktop and mobile.
- [x] Re-run type checking and production build before creating the revised checkpoint.

## Admin Prediction and Map Enhancement

- [x] Add a Simulate AI Prediction button to the Admin overview.
- [x] Generate a mock future-risk alert using the current complaint mix and selected area.
- [x] Add animated alert entry, risk-score update, and action recommendation feedback.
- [x] Expand Greater Noida coverage beyond the initial four demo areas.
- [x] Make map areas clickable and show related complaints, risk, and recommended action.
- [x] Add animated dashboard depth, live pulses, hover states, and transitions without harming readability.
- [x] Verify the enhanced flow on desktop and mobile, then run type check and production build.

## Area Selection and Readability Correction

- [x] Replace the User report form's limited area options with the full Greater Noida area list.
- [x] Use the shared area list consistently in User reporting and Admin area selection.
- [x] Improve Admin map labels and selected-area details with high-contrast readable surfaces.
- [x] Ensure area selection never applies blur to the area name or related issue details.
- [x] Verify User submission and Admin readability, then run type check and production build.

## Selected Area Synchronization

- [x] Focus/highlight the selected area on the Admin map when the area selector changes.
- [x] Show selected area location metadata and a clear map focus state.
- [x] Filter Latest Complaints to the currently selected area.
- [x] Add a clear empty state when the selected area has no complaints.
- [x] Verify area switching, map focus, complaint filtering, and production build.

## Map Locator and Risk-State Correction

- [x] Add an explicit selected-area locator marker for every Greater Noida area.
- [x] Ensure the selected map location changes visually when any area is selected.
- [x] Compute waterlogging probability from complaints in the currently selected area only.
- [x] Show a neutral monitoring state when the selected area has insufficient relevant complaints.
- [x] Verify the locator and neutral-risk states, then run type check and production build.

## Map Label Cleanup

- [x] Remove the oversized static labels for Knowledge Park 2, Alpha 1, Pari Chowk, and Surajpur.
- [x] Preserve the selected-area locator marker and area dropdown behavior.
- [x] Verify the simplified map and production build.

## Live IST Clock

- [x] Replace the hardcoded Admin date and time with the current IST date and time.
- [x] Refresh the displayed IST time automatically while the Admin dashboard is open.
- [x] Verify the live IST display and production build.

## Live Greater Noida Weather

- [x] Connect the weather card to a live public weather source for Greater Noida.
- [x] Refresh the live condition and temperature at a reasonable interval.
- [x] Adapt dashboard visual treatment for clear, cloudy, rain, and thunderstorm conditions.
- [x] Provide a clear live-data fallback if the weather source is unavailable.
- [x] Verify the live weather card and production build.

## Multi-Category Risk Intelligence

- [x] Calculate selected-area complaint counts for Waterlogging, Pothole, Streetlight, Garbage, and Health risk.
- [x] Show the strongest local category as the primary risk probability instead of always showing Waterlogging.
- [x] Provide category-specific risk wording, pattern reasons, and proactive recommendations.
- [x] Keep neutral monitoring until a selected-area category crosses the complaint threshold.
- [x] Add test coverage for the category-aware risk selection logic.
- [x] Verify multi-category dashboard states and production build.

## Time-Aware Greeting and Weather Alerts

- [x] Change the Admin greeting dynamically for IST morning, afternoon, evening, and night periods.
- [x] Create selected-area weather alert rules for rain/thunderstorm conditions and local waterlogging signals.
- [x] Show an active ring/badge on the Admin notification bell when the selected area needs proactive action.
- [x] Add an Admin alert panel with selected area, weather reason, and recommended action.
- [x] Ensure alerts update whenever the Admin changes the selected Greater Noida area.
- [x] Add unit tests for greeting periods and weather-triggered alert conditions.
- [x] Verify the new greeting and alert workflow, then run production validation.

## Department Routing and Dispatch

- [x] Define department ownership for Waterlogging, Pothole, Streetlight, Garbage, and Health risk.
- [x] Add an Admin department directory with current response status and category responsibility.
- [x] Add a dispatch action in the complaint detail panel that sends the selected complaint to its relevant department.
- [x] Add dispatch action from AI risk recommendations and selected-area weather alerts.
- [x] Show assigned department, dispatch status, and official instruction in the Admin workflow.
- [x] Add unit tests for category-to-department routing.
- [x] Verify the department dispatch flow, type check, tests, and production build.

## Department Availability Status

- [x] Add a current response status to every civic department record.
- [x] Display each department's availability status alongside category responsibility in the Admin directory.
- [x] Verify department responsibility and availability status, then rerun validation.

## User Contact Profile and Field Coordination

- [x] Add a User entry form for name, email, phone number, and default Greater Noida area.
- [x] Require a clear consent acknowledgement before sharing reporter contact details with assigned civic teams.
- [x] Pre-fill the report form with the User's selected/default area and reporter identity.
- [x] Store reporter name, email, phone, and contact-consent state with new complaints for the demo session.
- [x] Show authorized Admins the reporter contact card in the complaint detail panel.
- [x] Show field-team contact guidance after the complaint is dispatched to the relevant department.
- [x] Add validation tests for the User profile and contact detail workflow.
- [x] Verify profile capture, complaint contact details, and production build.

## Contact Workflow Completion

- [x] Show a saved reporter summary in the User report form before submission.
- [x] Add test coverage for storing consented complaint contact details and generating field-team contact guidance.
- [x] Verify the end-to-end User profile → report → Admin contact card → department dispatch flow.

## End-to-End Contact Flow Verification

- [x] Verify a consented reporter summary, newly assembled complaint contact data, and dispatched department guidance in one integrated preview flow.
- [x] Capture the integrated Admin complaint flow visually and rerun full validation.

## Login Experience Redesign

- [x] Replace the flood-only login tagline with inclusive all-issue civic intelligence messaging.
- [x] Redesign the login screen with stronger visual hierarchy, trust signals, and a clearer city-impact story.
- [x] Improve User and Admin role cards with richer capability previews and stronger interaction states.
- [x] Remove excessive empty space and improve the responsive mobile composition.
- [x] Verify the revised login screen on desktop and mobile, then run type check, tests, and production build.

## Complaint Privacy and Tracking

- [x] Mask reporter phone numbers in the Admin complaint workflow and remove direct phone exposure from the interface.
- [x] Generate a stable shared Complaint ID for every new User-submitted complaint.
- [x] Display the same Complaint ID in both the User and Admin complaint views.
- [x] Show User complaints as clickable home-page capsules with Complaint ID, issue type, area, and status.
- [x] Add a User complaint detail view showing the selected complaint’s report information, status, and Admin response.
- [x] Add tests for phone masking, Complaint ID generation, and complaint-detail selection.
- [x] Verify the private, shared-ID, User-to-Admin response flow and production build.

## Expandable User Complaint Details

- [x] Make each User complaint capsule clickable and expandable.
- [x] Show Complaint ID, issue category, area, submission time, description, and current status in the detail box.
- [x] Show the exact Admin response for the selected complaint, or a clear pending-response state.
- [x] Keep only the selected complaint detail open at a time and preserve existing tracking behavior.
- [x] Verify response-present and response-pending states, then run type check, tests, and production build.
