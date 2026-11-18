/**
 * Stands in for a real API call (this project has no backend).
 * Waits a moment so the user sees the "Sending…" state, then resolves.
 */
export function fakeRequest(ms = 900) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
