export function getFromLocalStorage(hash) {
  const item = localStorage.getItem('cookie-consent');

  if (!item) {
    return { consent: [], isBannerVisible: true, isDetailsVisible: false };
  }

  const { consent, hash: storedHash } = JSON.parse(item);

  let isBannerVisible = false;
  if (storedHash !== hash) {
    isBannerVisible = true;
  }

  return {
    consent: consent && consent.length > 0 ? consent : [],
    isBannerVisible,
    isDetailsVisible: false,
  };
}
