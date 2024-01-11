export function removeLocalStorage(localStorageItems) {
  if (localStorageItems) {
    for (const localStorageItem of localStorageItems) {
      localStorage.removeItem(localStorageItem);
    }
  }
}
