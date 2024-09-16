import { useContext } from 'react';
import ConsentContext from './ConsentContext';
import { ConsentContextState } from './types';

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
  } = useContext<ConsentContextState>(ConsentContext);

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
