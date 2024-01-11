export function saveToLocalStorage(consent, hash) {
  localStorage.setItem(
    'cookie-consent',
    JSON.stringify({ consent, hash, updated: new Date() })
  );
}
