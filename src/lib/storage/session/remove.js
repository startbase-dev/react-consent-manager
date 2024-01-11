export function removeSessionStorage(sessionStorageItems) {
  if (sessionStorageItems) {
    for (const sessionStorageItem of sessionStorageItems) {
      sessionStorage.removeItem(sessionStorageItem);
    }
  }
}
