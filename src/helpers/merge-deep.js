import { cloneDeep } from "./clone-deep.js";
import { isObject } from "./is-object.js";

export function mergeDeep(target, source) {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }

  const output = { ...target, ...source };

  if (isObject(source) && isObject(target)) {
    for (const key in source) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = isObject(source[key]) ? cloneDeep(source[key]) : source[key];
      }
    }
  }

  return output;
}
