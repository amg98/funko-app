export const apply = <T, R>(
  transformer: (_: T) => R,
  data: T | null | undefined,
): R | null => {
  if (!data) {
    return null;
  }
  return transformer(data);
};
