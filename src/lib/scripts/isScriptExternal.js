export function isScriptExternal(x) {
  return !!x.id && !!x.src;
}
