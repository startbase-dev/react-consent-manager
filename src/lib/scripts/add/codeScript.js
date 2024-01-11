export function addCodeScript(code, elementId) {
  const element = document.createElement('script');
  element.id = elementId;
  element.innerHTML = code;
  document.body.appendChild(element);
}
