import { Cookie } from "../../../types";

export function removeCookies(cookies?: Cookie[]): void {
  if (cookies) {
    for (const cookie of cookies) {
      document.cookie = `${cookie.pattern}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}
