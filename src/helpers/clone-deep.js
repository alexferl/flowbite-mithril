import { isObject } from "./is-object.js";

export function cloneDeep(source) {
  if (!isObject(source)) {
    return source;
  }

  const output = {};

  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }

  return output;
}
