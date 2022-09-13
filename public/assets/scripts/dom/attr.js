import { isObject, isString } from './typeOf.js';
import { each } from './each.js';

const getAttribute = (node, prop) => node.getAttribute(prop);
const setAttribute = (node, prop, value) => node.setAttribute(prop, value);

export const attr = (node, prop, value) => {
  if (!node || node?.nodeType !== document.ELEMENT_NODE) {
    throw new Error('첫번째 전달인자 타입은 요소 노드여야 합니다.');
  }
  if (!value) {
    if (isObject(prop)) {
      const props = prop;
      each(props, (key, value) => {
        setAttribute(node, key, value);
      });
      return node;
    }
    if (isString(prop)) {
      return getAttribute(node, prop);
    }
  } else {
    if (isString(prop)) {
      setAttribute(node, prop, value);
    }
    return node;
  }
};
