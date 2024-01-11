import { createContext } from 'react';

const initialContextState = {
  consent: [],
  isBannerVisible: true,
  isDetailsVisible: false,
  hasConsent: () => true,
  toggleConsentBanner: () => {},
  toggleConsentModal: () => {},
  setConsent: () => {},
  options: { services: [] },
};

const ConsentContext = createContext(initialContextState);

export const Provider = ConsentContext.Provider;

export default ConsentContext;
