interface ConsentData {
  consent: string[];
  hash: string;
}

export function getFromLocalStorage(hash: string): {
  consent: string[];
  isBannerVisible: boolean;
  isDetailsVisible: boolean;
} {
  const item = localStorage.getItem("cookie-consent");

  if (!item) {
    return { consent: [], isBannerVisible: true, isDetailsVisible: false };
  }

  const { consent, hash: storedHash }: ConsentData = JSON.parse(item);

  const isBannerVisible = storedHash !== hash;

  return {
    consent: consent && consent.length > 0 ? consent : [],
    isBannerVisible,
    isDetailsVisible: false,
  };
}
