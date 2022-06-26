import { DETAILS_KEYS } from '@constants';
import { normalizeValues } from '@utils/normalizeValues';

export const normalizeStaff = (staff) =>
  staff
    .filter((person) => person[DETAILS_KEYS.NAME])
    .map((person) => normalizeValues(person));
