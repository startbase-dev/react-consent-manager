import { useCallback, useState } from "react";
import useConsent from "./useConsent";

function useSelectedServices() {
  const { consent } = useConsent();

  const [selectedServices, setSelectedServices] = useState<string[]>(consent);

  const handleSelectedServiceChange = useCallback(
    (service: string, selected: boolean) => {
      setSelectedServices((services) => {
        return selected
          ? [...services, service]
          : services.filter((item) => item !== service);
      });
    },
    [],
  );

  return { selectedServices, handleSelectedServiceChange };
}

export default useSelectedServices;
