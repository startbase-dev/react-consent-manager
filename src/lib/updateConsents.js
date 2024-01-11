import { saveToLocalStorage } from './storage/localStorage/save';

import { addServices } from './addServices';
import { removeServices } from './removeServices';

export function updateConsents(options, consent, hash) {
  const removedServices = options.services.filter(
    (service) => !consent.includes(service.id)
  );
  const addedServices = options.services.filter((service) =>
    consent.includes(service.id)
  );

  removeServices(removedServices);
  addServices(addedServices);
  saveToLocalStorage(consent, hash);
}
