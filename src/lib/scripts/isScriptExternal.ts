export function isScriptExternal(x: { id?: string; src?: string }): boolean {
  return !!x.id && !!x.src;
}
