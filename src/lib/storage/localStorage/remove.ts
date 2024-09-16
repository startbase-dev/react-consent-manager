export function removeLocalStorage(localStorageItems?: string[]): void {
  if (localStorageItems) {
    for (const localStorageItem of localStorageItems) {
      localStorage.removeItem(localStorageItem);
    }
  }
}
