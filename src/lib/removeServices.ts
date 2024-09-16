import { removeCookies } from "./storage/cookies/remove";
import { removeLocalStorage } from "./storage/localStorage/remove";
import { removeSessionStorage } from "./storage/session/remove";

import { removeScripts } from "./scripts/remove";
import { Service } from "../types";

export function removeServices(services: Service[]): void {
  services.forEach(
    ({
      id,
      scripts = [],
      cookies = [],
      localStorage = [],
      sessionStorage = [],
    }) => {
      removeScripts(id, scripts);
      removeCookies(cookies);
      removeLocalStorage(localStorage);
      removeSessionStorage(sessionStorage);
    },
  );
}
