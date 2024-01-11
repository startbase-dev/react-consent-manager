import React from 'react';
import { Provider } from './ConsentContext';
import useConsentState from './useConsentState';

function ConsentProvider({ options, children }) {
  const {
    consent,
    hasConsent,
    isBannerVisible,
    toggleConsentBanner,
    isDetailsVisible,
    toggleConsentModal,
    setConsent,
  } = useConsentState(options);

  return (
    <Provider
      value={{
        consent,
        hasConsent,
        isBannerVisible,
        toggleConsentBanner,
        isDetailsVisible,
        toggleConsentModal,
        setConsent,
        options,
      }}
    >
      {children}
    </Provider>
  );
}

export default ConsentProvider;
