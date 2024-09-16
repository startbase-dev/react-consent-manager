import { useCallback, useEffect, useState } from "react";

import { addServices } from "./lib/addServices";
import { getFromLocalStorage } from "./lib/storage/localStorage/get";
import { isValidInLocalStorage } from "./lib/storage/localStorage/valid";
import { updateConsents } from "./lib/updateConsents";

import MD5 from "md5";
import { ConsentState, Options, Service } from "./types";

function useConsentState(options: Options) {
  const [state, setState] = useState<ConsentState>({
    consent: [],
    isBannerVisible: false,
    isDetailsVisible: false,
    hash: MD5(JSON.stringify(options)),
  });

  useEffect(() => {
    if (!isValidInLocalStorage(state.hash)) {
      const consent = options.services
        .filter((service: Service) => service.mandatory)
        .map((service: Service) => service.id);

      setState((state) => ({
        ...state,
        consent,
        isBannerVisible: true,
        isDetailsVisible: false,
      }));
      return;
    }

    const { consent, isBannerVisible, isDetailsVisible } = getFromLocalStorage(
      state.hash,
    );

    setState((state) => ({
      ...state,
      consent,
      isBannerVisible,
      isDetailsVisible,
    }));

    const approvedServices = options.services.filter((service: Service) =>
      consent.includes(service.id),
    );
    addServices(approvedServices);
  }, [options.services, state.hash]);

  const setConsent = useCallback(
    (consent: string[]) => {
      setState((state) => ({ ...state, consent, isBannerVisible: false }));
      updateConsents(options, consent, state.hash);
    },
    [options, state.hash],
  );

  const hasConsent = useCallback(
    (id: string) => state.consent.includes(id),
    [state.consent],
  );

  const toggleConsentBanner = useCallback(() => {
    setState((state) => ({
      ...state,
      isBannerVisible: !state.isBannerVisible,
    }));
  }, []);

  const toggleConsentModal = useCallback(() => {
    setState((state) => ({
      ...state,
      isDetailsVisible: !state.isDetailsVisible,
    }));
  }, []);

  return {
    consent: state.consent,
    hasConsent,
    isBannerVisible: state.isBannerVisible,
    isDetailsVisible: state.isDetailsVisible,
    toggleConsentBanner,
    toggleConsentModal,
    setConsent,
  };
}

export default useConsentState;
