/**
 * Handle edge cases where a dialogue line contains
 * label-like words such as "Crazy:B"
 * which may be parsed as a name because it contains a colon.
 */
export const isNameLineException = (line) =>
  line.toUpperCase().startsWith('CRAZY:B');
