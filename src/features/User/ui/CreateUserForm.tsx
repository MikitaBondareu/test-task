'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { CreateUserFormType } from '../CreateUserForm/schema/schema';
import { createUserSchema } from '../CreateUserForm/schema/schema';
import { CREATE_USER_KEYS } from '../model/constants';
import CreateUserCardForm from './CreateUserCardForm';

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

  const isErrorExist = !!Object.keys(methods.formState.errors).length;

  const handleValidate = (fields: (keyof CreateUserFormType)[]) => {
    return methods.trigger(fields);
  };

  const handleInvalidate = (fields: (keyof CreateUserFormType)[]) => {
    return methods.clearErrors(fields);
  };

  const handleSubmitForm = (userData: CreateUserFormType) => {
    alert(userData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <CreateUserCardForm
          validate={handleValidate}
          invalidate={handleInvalidate}
          isErrorExist={isErrorExist}
        />
      </form>
    </FormProvider>
  );
};

export default CreateUserForm;
