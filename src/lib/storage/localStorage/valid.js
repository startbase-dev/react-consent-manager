export function isValidInLocalStorage(hash) {
  const item = localStorage.getItem('cookie-consent');

  if (!item) {
    return false;
  }

  const { hash: storedHash } = JSON.parse(item);

  if (storedHash !== hash) {
    return false;
  }

  return true;
}
