import { saveToLocalStorage } from "./storage/localStorage/save";

import { addServices } from "./addServices";
import { removeServices } from "./removeServices";
import { Options } from "../types";

export function updateConsents(
  options: Options,
  consent: string[],
  hash: string,
): void {
  const removedServices = options.services.filter(
    (service) => !consent.includes(service.id),
  );
  const addedServices = options.services.filter((service) =>
    consent.includes(service.id),
  );

  removeServices(removedServices);
  addServices(addedServices);
  saveToLocalStorage(consent, hash);
}
