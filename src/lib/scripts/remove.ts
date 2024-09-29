import { Script } from "../../types";

export function removeScripts(serviceId: string, scripts?: Script[]): void {
  if (!scripts) {
    return;
  }

  for (const { id } of scripts) {
    const element = document.getElementById(`${serviceId}-${id}`);

    if (!element) {
      continue;
    }

    element.remove();
  }
}
