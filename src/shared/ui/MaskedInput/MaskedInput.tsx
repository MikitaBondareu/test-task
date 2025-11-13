'use client';

import type { MaskOptions } from '@react-input/mask';
import { useMask } from '@react-input/mask';
import { InfoIcon } from 'lucide-react';
import React, { useImperativeHandle } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from '../../components/ui/input-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { type CustomInputProps } from '../CustomInput/CustomInput';
import { LegacyInput } from '../LegacyInput/LegacyInput';

type MaskedInputProps = {
  maskOptions: MaskOptions;
} & CustomInputProps;

const MaskedInput = ({
  name,
  maskOptions,
  type,
  label,
  ...props
}: MaskedInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { ref, ...registerProps } = register(name);

  const inputRef = useMask(maskOptions);

  useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <>
      <InputGroup>
        <InputGroupAddon>{label}</InputGroupAddon>
        <LegacyInput ref={inputRef} type={type} {...props} {...registerProps} />
        {props.inputHint && (
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
              <TooltipContent>{props.inputHint}</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        )}
      </InputGroup>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </>
  );
};

export default MaskedInput;
