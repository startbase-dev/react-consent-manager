export function isValidInLocalStorage(hash: string): boolean {
  const item = localStorage.getItem("cookie-consent");

  if (!item) {
    return false;
  }

  const { hash: storedHash }: { hash: string } = JSON.parse(item);

  return storedHash === hash;
}
