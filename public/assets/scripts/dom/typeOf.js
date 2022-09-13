export const typeOf = (data) =>
  Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
export const isObject = (data) => typeOf(data) === 'object';
export const isArray = (data) => typeOf(data) === 'array';
export const isString = (data) => typeOf(data) === 'string';
