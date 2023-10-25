export const omit = (keys) => (obj) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (keys.includes(key)) {
      return;
    }
    result[key] = obj[key];
  });
  return result;
};
