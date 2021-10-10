import { Formatters } from '@constants';

/**
 * Save value in localStorage at specified key
 * @param {Formatters} formatter key of the localStorage item
 * @param {string} key key in the object stored as the value for the formatter localStorage item
 * @param {string} value
 */
export const updateLocalStorage = ({ formatter, key, value }) => {
  let configObject = localStorage.getItem(formatter);
  // Handle legacy localStorage saving
  // TODO: can remove after 1 month of deployment probably (after 11/10/2021)
  if (!configObject) {
    configObject = {};
    configObject[key] = JSON.parse(localStorage.getItem(key));
    localStorage.removeItem(key);
  } else {
    configObject = JSON.parse(configObject);
  }

  configObject[key] = value;
  localStorage.setItem(formatter, JSON.stringify(configObject));
};
