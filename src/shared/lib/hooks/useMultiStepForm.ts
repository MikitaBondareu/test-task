import { useMemo, useState } from 'react';

import { CREATE_USER_KEYS } from '@/src/features/User/model/constants';
import type { CreateUserFormType } from '@/src/features/User/ui/CreateUserForm/schema/schema';

export enum STEPS {
  ACCOUNT_INFO,
  END,
}

type Validator = (fields: (keyof CreateUserFormType)[]) => Promise<boolean>;
type Invalidator = (fields: (keyof CreateUserFormType)[]) => void;

export const useMultiStepForm = (
  validate?: Validator,
  invalidate?: Invalidator
) => {
  const [step, setStep] = useState(STEPS.ACCOUNT_INFO);

  const fields = useMemo(
    () => [
      [
        CREATE_USER_KEYS.FIRST_NAME,
        CREATE_USER_KEYS.LAST_NAME,
        CREATE_USER_KEYS.EMAIL,
        CREATE_USER_KEYS.PHONE,
      ] as (keyof CreateUserFormType)[],
      [CREATE_USER_KEYS.COUNTRY] as (keyof CreateUserFormType)[],
    ],
    []
  );

  const handleNextStep = () => {
    validate?.(fields[step]).then(isSucces => {
      if (isSucces) {
        setStep(prevStep => prevStep + 1);
      }
    });
  };

  const handlePrewStep = () => {
    invalidate?.([...fields[step], ...fields[step - 1]]);
    setStep(prevStep => prevStep - 1);
  };

  return {
    step,
    fields,
    handleNextStep,
    handlePrewStep,
  };
};
