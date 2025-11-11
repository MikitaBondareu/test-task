'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  LABELS_CONSTANTS,
  PLACEHOLDER_TEXTS,
} from '@/src/shared/lib/constants/textConstants';

import CustomInput from '../../../shared/ui/CustomInput/CustomInput';
import type { CreateUserFormType } from '../CreateUserForm/schema/schema';
import { createUserSchema } from '../CreateUserForm/schema/schema';
import { CREATE_USER_KEYS } from '../model/constants';

const CreateUserForm = () => {
  const defaultValues = useMemo(
    () => ({
      [CREATE_USER_KEYS.EMAIL]: '',
      [CREATE_USER_KEYS.FIRST_NAME]: '',
      [CREATE_USER_KEYS.LAST_NAME]: '',
      [CREATE_USER_KEYS.PHONE]: '',
    }),
    []
  );
  const methods = useForm<CreateUserFormType>({
    mode: 'all',
    resolver: zodResolver(createUserSchema),
    defaultValues,
  });

  const mockInputs = [
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
  ];

  return (
    <FormProvider {...methods}>
      <form>
        {mockInputs.map((item, index) => (
          <CustomInput
            key={index}
            label={item.label}
            placeholder={item.placeholder}
            name={item.name}
            inputHint={item.inputHint}
            type={item.type ? item.type : 'text'}
          />
        ))}
      </form>
    </FormProvider>
  );
};

export default CreateUserForm;
