export function removeScripts(serviceId, scripts) {
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
