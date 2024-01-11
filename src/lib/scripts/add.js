import { addCodeScript } from './add/codeScript';
import { addExternalScript } from './add/externalScript';
import { isScriptCode } from './isScriptCode';
import { isScriptExternal } from './isScriptExternal';

export function addScripts(serviceId, scripts) {
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
      addExternalScript(script.src, elementId);
    }

    if (isScriptCode(script)) {
      addCodeScript(script.code, elementId);
    }
  }
}
