import { useCallback, useState } from 'react';

import useConsent from './useConsent';

function useSelectedServices() {
  const { consent } = useConsent();

  const [selectedServices, setSelectedServices] = useState(consent);

  const handleSelectedServiceChange = useCallback((service, selected) => {
    setSelectedServices((services) => {
      console.log(services, service, selected, [...services, service]);
      return selected
        ? [...services, service]
        : services.filter((item) => item !== service);
    });
  }, []);

  return { selectedServices, handleSelectedServiceChange };
}

export default useSelectedServices;
