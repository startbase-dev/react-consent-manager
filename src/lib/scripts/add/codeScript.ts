export function addCodeScript(code: string, elementId: string): void {
  const element = document.createElement("script");
  element.id = elementId;
  element.innerHTML = code;
  document.body.appendChild(element);
}
