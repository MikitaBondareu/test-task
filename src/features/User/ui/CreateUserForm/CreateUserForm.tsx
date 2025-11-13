'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CREATE_USER_KEYS } from '../../model/constants';
import CreateUserCardForm from '../CreateUserCardForm/CreateUserCardForm';
import type { CreateUserFormType } from './schema/schema';
import { createUserSchema } from './schema/schema';

const CreateUserForm = () => {
  const defaultValues = useMemo(
    () => ({
      [CREATE_USER_KEYS.EMAIL]: '',
      [CREATE_USER_KEYS.FIRST_NAME]: '',
      [CREATE_USER_KEYS.LAST_NAME]: '',
      [CREATE_USER_KEYS.PHONE]: '+375',
      [CREATE_USER_KEYS.COUNTRY]: '',
    }),
    []
  );
  const methods = useForm<CreateUserFormType>({
    mode: 'all',
    resolver: zodResolver(createUserSchema),
    defaultValues,
    shouldUnregister: false,
  });

  const isErrorExist = !!Object.keys(methods.formState.errors).length;

  const handleValidate = (fields: (keyof CreateUserFormType)[]) => {
    return methods.trigger(fields);
  };

  const handleInvalidate = (fields: (keyof CreateUserFormType)[]) => {
    return methods.clearErrors(fields);
  };

  const handleSubmitForm = (userData: CreateUserFormType) => {
    // Описанный хук из RTK Query
    alert(JSON.stringify(userData));
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
