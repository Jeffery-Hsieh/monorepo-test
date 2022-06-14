export const get = <T extends object>(key: string, obj: T, fallback?: any) => {
  const value = obj[key as keyof typeof obj];

  return value === undefined ? fallback : value;
};
