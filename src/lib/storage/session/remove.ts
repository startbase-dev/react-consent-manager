export function removeSessionStorage(sessionStorageItems?: string[]): void {
  if (sessionStorageItems) {
    for (const sessionStorageItem of sessionStorageItems) {
      sessionStorage.removeItem(sessionStorageItem);
    }
  }
}
