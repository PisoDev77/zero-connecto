import { isArray, isObject } from './typeOf.js';

export const each = (arrayOrObject, callback) => {
  if (isArray(arrayOrObject)) {
    const list = arrayOrObject;
    Array.from(list).forEach(callback);
  }

  if (isObject(arrayOrObject)) {
    const object = arrayOrObject;
    Object.entries(object).forEach(([key, value]) => callback(key, value));
  }
};
