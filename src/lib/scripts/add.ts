import { addCodeScript } from "./add/codeScript";
import { addExternalScript } from "./add/externalScript";
import { isScriptCode } from "./isScriptCode";
import { isScriptExternal } from "./isScriptExternal";
import { Script } from "../../types";

export function addScripts(serviceId: string, scripts?: Script[]): void {
  if (!scripts) {
    return;
  }

  for (const script of scripts) {
    const { id } = script;
    const elementId = `${serviceId}-${id}`;

    if (document.getElementById(elementId)) {
      continue;
    }

    if (isScriptExternal(script)) {
      addExternalScript(script.src as string, elementId);
    }

    if (isScriptCode(script)) {
      addCodeScript(script.code as string, elementId);
    }
  }
}
