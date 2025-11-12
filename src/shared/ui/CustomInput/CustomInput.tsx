'use client';

import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { InfoIcon } from 'lucide-react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Tooltip, TooltipContent } from '@/components/ui/tooltip';

type CustomInputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  inputHint: string;
};

const CustomInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  inputHint,
}: CustomInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Получаем контекст из FormProvider

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputGroup>
            <InputGroupInput {...field} placeholder={placeholder} type={type} />
            {/* Сам инпут */}
            <InputGroupAddon>{label}</InputGroupAddon>
            {/* Лейбл для инпута */}
            <InputGroupAddon align="inline-end">
              {/* Подсказка всплывающая */}
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Info"
                    size="icon-xs"
                  >
                    <InfoIcon />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  {/* Текст подсказки */}
                  {inputHint}
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        )}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      {/* Вывод ошибки */}
    </>
  );
};
export default CustomInput;
