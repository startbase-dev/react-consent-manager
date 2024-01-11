import { useCallback } from 'react';

import useConsent from './useConsent';

function useConsentBannerActions() {
  const {
    setConsent,
    options: { services },
  } = useConsent();

  const onApprove = useCallback(
    (approved) => {
      setConsent(approved ? approved : services.map(({ id }) => id));
    },
    [services, setConsent]
  );

  const onDecline = useCallback(() => {
    setConsent(
      services.filter(({ mandatory }) => mandatory).map(({ id }) => id)
    );
  }, [setConsent]);

  return { onDecline, onApprove };
}

export default useConsentBannerActions;
