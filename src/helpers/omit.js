export const omit = (keys) => (obj) => {
  const result = {};

  for (const key in obj) {
    if (keys.includes(key)) {
      return;
    }
    result[key] = obj[key];
  }
  return result;
};
