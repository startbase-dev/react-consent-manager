import { useCallback, useEffect, useState } from 'react';

import { addServices } from './lib/addServices';
import { getFromLocalStorage } from './lib/storage/localStorage/get';
import { isValidInLocalStorage } from './lib/storage/localStorage/valid';
import { updateConsents } from './lib/updateConsents';

import MD5 from './lib/md5';

function useConsentState(options) {
  const [state, setState] = useState({
    consent: [],
    isBannerVisible: false,
    isDetailsVisible: false,
    hash: MD5(JSON.stringify(options)),
  });

  useEffect(() => {
    if (!isValidInLocalStorage(state.hash)) {
      const consent = options.services
        .filter((service) => service?.mandatory)
        .map((service) => service.id);

      setState((state) => ({
        ...state,
        consent,
        isBannerVisible: true,
        isDetailsVisible: false,
      }));
      return;
    }

    const { consent, isBannerVisible, isDetailsVisible } = getFromLocalStorage(
      state.hash
    );

    setState((state) => ({
      ...state,
      consent,
      isBannerVisible,
      isDetailsVisible,
    }));

    const approvedServices = options.services.filter((service) =>
      consent.includes(service.id)
    );
    addServices(approvedServices);
  }, [options.services, state.hash]);

  const setConsent = useCallback(
    (consent) => {
      setState((state) => ({ ...state, consent, isBannerVisible: false }));
      updateConsents(options, consent, state.hash);
    },
    [options, state.hash]
  );

  const hasConsent = useCallback(
    (id) => state.consent.includes(id),
    [state.consent]
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
