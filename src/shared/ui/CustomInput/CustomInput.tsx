'use client';

import { InfoIcon } from 'lucide-react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '../../components/ui/input-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../components/ui/tooltip';

export type CustomInputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  inputHint: string;
};

export const CustomInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  inputHint,
}: CustomInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputGroup>
            <InputGroupInput
              {...field}
              placeholder={placeholder}
              type={type}
              aria-invalid={!!errorMessage}
              aria-describedby={errorMessage ? `${name}-error` : undefined}
            />
            <InputGroupAddon>{label}</InputGroupAddon>
            <InputGroupAddon align="inline-end">
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
                <TooltipContent>{inputHint}</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        )}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </>
  );
};
