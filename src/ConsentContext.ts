import { createContext } from "react";
import { ConsentContextState } from "./types";

const initialContextState: ConsentContextState = {
  consent: [],
  isBannerVisible: true,
  isDetailsVisible: false,
  hasConsent: () => true,
  toggleConsentBanner: () => ({}),
  toggleConsentModal: () => ({}),
  setConsent: () => ({}),
  options: { services: [] },
};

const ConsentContext = createContext<ConsentContextState>(initialContextState);

export const Provider = ConsentContext.Provider;

export default ConsentContext;
