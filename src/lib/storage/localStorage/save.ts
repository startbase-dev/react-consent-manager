export function saveToLocalStorage(consent: string[], hash: string): void {
  localStorage.setItem(
    'cookie-consent',
    JSON.stringify({ consent, hash, updated: new Date() })
  );
}
