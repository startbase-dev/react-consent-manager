export function isScriptCode(x: { id?: string; code?: string }): boolean {
  return !!x.id && !!x.code;
}
