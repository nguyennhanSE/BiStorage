export function shortenFilename(name: string, baseMax = 10, dots = '...') {
  if (!name) return '';
  const lastDot = name.lastIndexOf('.');
  const hasExt = lastDot > 0 && lastDot < name.length - 1;
  const ext = hasExt ? name.slice(lastDot) : '';      
  const base = hasExt ? name.slice(0, lastDot) : name;  

  const baseChars = [...base]; 
  const shortBase =
    baseChars.length > baseMax ? baseChars.slice(0, baseMax).join('') + dots : base;

  return shortBase + ext;
}


export function summarizeFileList(files: string[]): string {
  const maxShown = 3;
  const baseMax = 10;
  const dots = '....';

  const safe = (files ?? []).filter((s): s is string => typeof s === 'string' && s.length > 0);
  if (safe.length === 0) return '';
  const shown = safe.slice(0, maxShown).map(f => shortenFilename(f, baseMax, dots));
  const remaining = safe.length - maxShown;

  const names = shown.join(', ');
  return remaining > 0
    ? `${names} + ${remaining} more file${remaining > 1 ? 's' : ''}`
    : names;
}
