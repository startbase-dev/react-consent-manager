import { useCallback } from "react";

import useConsent from "./useConsent";
import { Service } from "./types";

function useConsentBannerActions() {
  const {
    setConsent,
    options: { services },
  } = useConsent();

  const onApprove = useCallback(
    (approved?: string[]) => {
      setConsent(approved || services.map(({ id }: Service) => id));
    },
    [services, setConsent],
  );

  const onDecline = useCallback(() => {
    setConsent(
      services
        .filter(({ mandatory }: Service) => mandatory)
        .map(({ id }: Service) => id),
    );
  }, [services, setConsent]);

  return { onDecline, onApprove };
}

export default useConsentBannerActions;
