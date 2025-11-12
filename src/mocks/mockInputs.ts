import { CREATE_USER_KEYS } from '../features/User/model/constants';
import {
  LABELS_CONSTANTS,
  PLACEHOLDER_TEXTS,
} from '../shared/lib/constants/textConstants';
export const mockInputs = [
  [
    {
      label: LABELS_CONSTANTS.EMAIL,
      placeholder: PLACEHOLDER_TEXTS.EMAIL,
      name: CREATE_USER_KEYS.EMAIL,
      inputHint: 'we will use it for notification',
      type: 'email',
    },
    {
      label: LABELS_CONSTANTS.FIRST_NAME,
      placeholder: PLACEHOLDER_TEXTS.FIRST_NAME,
      name: CREATE_USER_KEYS.FIRST_NAME,
      inputHint: 'real name',
    },
    {
      label: LABELS_CONSTANTS.LAST_NAME,
      placeholder: PLACEHOLDER_TEXTS.LAST_NAME,
      name: CREATE_USER_KEYS.LAST_NAME,
      inputHint: 'real surname',
    },
    {
      label: LABELS_CONSTANTS.PHONE,
      placeholder: PLACEHOLDER_TEXTS.PHONE,
      name: CREATE_USER_KEYS.PHONE,
      inputHint: 'needed for registration only',
      type: 'tel',
    },
  ],
  [
    {
      label: LABELS_CONSTANTS.EMAIL,
      placeholder: PLACEHOLDER_TEXTS.EMAIL,
      name: CREATE_USER_KEYS.EMAIL,
      inputHint: 'we will use it for notification',
      type: 'email',
    },
    {
      label: LABELS_CONSTANTS.FIRST_NAME,
      placeholder: PLACEHOLDER_TEXTS.FIRST_NAME,
      name: CREATE_USER_KEYS.FIRST_NAME,
      inputHint: 'real name',
    },
    {
      label: LABELS_CONSTANTS.LAST_NAME,
      placeholder: PLACEHOLDER_TEXTS.LAST_NAME,
      name: CREATE_USER_KEYS.LAST_NAME,
      inputHint: 'real surname',
    },
    {
      label: LABELS_CONSTANTS.PHONE,
      placeholder: PLACEHOLDER_TEXTS.PHONE,
      name: CREATE_USER_KEYS.PHONE,
      inputHint: 'needed for registration only',
      type: 'tel',
    },
  ],
];
