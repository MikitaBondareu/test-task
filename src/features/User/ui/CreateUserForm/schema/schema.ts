import { z } from 'zod';

import {
  FORM_ERROR_MESSAGES,
  FORM_REG_EX,
} from '@/src/shared/lib/constants/formConstants';

export const createUserSchema = z.object({
  firstName: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.REQUIRED)
    .regex(FORM_REG_EX.LETTERS, FORM_ERROR_MESSAGES.ONLY_LETTERS),
  lastName: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.REQUIRED)
    .regex(FORM_REG_EX.LETTERS, FORM_ERROR_MESSAGES.ONLY_LETTERS),
  email: z
    .email(FORM_ERROR_MESSAGES.EMAIL)
    .nonempty(FORM_ERROR_MESSAGES.REQUIRED),
  phoneNumber: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.REQUIRED)
    .regex(FORM_REG_EX.PHONE, FORM_ERROR_MESSAGES.PHONE),
  country: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.REQUIRED)
    .regex(FORM_REG_EX.LETTERS, FORM_ERROR_MESSAGES.ONLY_LETTERS),
});

export type CreateUserFormType = z.infer<typeof createUserSchema>;
