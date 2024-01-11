import { useContext } from 'react';

import ConsentContext from './ConsentContext';

function useConsent() {
  const {
    consent,
    isBannerVisible,
    isDetailsVisible,
    hasConsent,
    toggleConsentBanner,
    toggleConsentModal,
    setConsent,
    options,
  } = useContext(ConsentContext);

  return {
    consent,
    isBannerVisible,
    isDetailsVisible,
    hasConsent,
    toggleConsentBanner,
    toggleConsentModal,
    setConsent,
    options,
  };
}

export default useConsent;
