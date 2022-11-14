import { FORMATTERS } from '@constants';

/**
 * Save value in localStorage at specified key
 * @param {FORMATTERS} formatter key of the localStorage item
 * @param {string} key key in the object stored as the value for the formatter localStorage item
 * @param {string} value
 */
export const updateLocalStorage = ({ formatter, key, value }) => {
  let configObject = localStorage.getItem(formatter);
  if (!configObject) {
    configObject = '{}';
  }
  configObject = JSON.parse(configObject);
  configObject[key] = value;
  localStorage.setItem(formatter, JSON.stringify(configObject));
};
