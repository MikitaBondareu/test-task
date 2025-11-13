'use client';

import React from 'react';

import { mockInputs } from '@/src/mocks/mockInputs';
import { Button } from '@/src/shared/components/ui/button';
import { getMaskOptions, MASK_KEYS } from '@/src/shared/lib/constants/masks';
import {
  STEPS,
  useMultiStepForm,
} from '@/src/shared/lib/hooks/useMultiStepForm';
import { CustomInput } from '@/src/shared/ui/CustomInput/CustomInput';
import MaskedInput from '@/src/shared/ui/MaskedInput/MaskedInput';

import type { CreateUserFormType } from '../CreateUserForm/schema/schema';

type CreateUserCardFormProps = {
  validate?: (fields: (keyof CreateUserFormType)[]) => Promise<boolean>;
  invalidate?: (fields: (keyof CreateUserFormType)[]) => void;
  isErrorExist?: boolean;
};

const CreateUserCardForm = ({
  validate,
  invalidate,
  isErrorExist,
}: CreateUserCardFormProps) => {
  const { step, handleNextStep, handlePrewStep } = useMultiStepForm(
    validate,
    invalidate
  );

  return (
    <>
      {mockInputs[step].map((item, index) => {
        if (item.type === 'tel') {
          return (
            <MaskedInput
              key={`${item.name}_${index}`}
              label={item.label}
              placeholder={item.placeholder}
              name={item.name}
              inputHint={item.inputHint}
              type={item.type ? item.type : 'text'}
              maskOptions={getMaskOptions(MASK_KEYS.PHONE)}
            />
          );
        }
        return (
          <CustomInput
            key={`${item.name}_${index}`}
            label={item.label}
            placeholder={item.placeholder}
            name={item.name}
            inputHint={item.inputHint}
            type={item.type ? item.type : 'text'}
          />
        );
      })}
      {step === STEPS.ACCOUNT_INFO && (
        <Button onClick={handleNextStep} disabled={isErrorExist}>
          Next
        </Button>
      )}
      {step !== STEPS.ACCOUNT_INFO && (
        <Button onClick={handlePrewStep}>Back</Button>
      )}
      {step === STEPS.END && (
        <Button type="submit" disabled={isErrorExist}>
          Create
        </Button>
      )}
    </>
  );
};

export default CreateUserCardForm;
