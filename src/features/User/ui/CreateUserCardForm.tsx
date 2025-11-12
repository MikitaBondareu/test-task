'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { mockInputs } from '@/src/mocks/mockInputs';
import {
  STEPS,
  useMultiStepForm,
} from '@/src/shared/lib/hooks/useMultiStepForm';
import CustomInput from '@/src/shared/ui/CustomInput/CustomInput';

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
      {mockInputs[step].map((item, index) => (
        <CustomInput
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          name={item.name}
          inputHint={item.inputHint}
          type={item.type ? item.type : 'text'}
        />
      ))}
      {step === STEPS.ACCOUNT_INFO && (
        <Button onClick={handleNextStep}>Next</Button>
      )}
      {step !== STEPS.ACCOUNT_INFO && (
        <Button onClick={handlePrewStep}>Back</Button>
      )}
      {step === STEPS.END && <Button type="submit">Create</Button>}
    </>
  );
};

export default CreateUserCardForm;
