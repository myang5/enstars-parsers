import { mapValues } from 'lodash';

export const normalizeValues = (object) =>
  mapValues(object, (value) => value.trim());
