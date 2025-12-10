'use client';

import React, { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

type SelectFieldPropTypes = {
  selectOptions: { name: string; value: string | null }[];
  statusParams: (value: string) => void;
};

const SelectField = ({ selectOptions, statusParams }: SelectFieldPropTypes) => {
  const [selectValue, setSelectValue] = useState(selectOptions[0].value);
  const handleSelect = (value: string) => {
    setSelectValue(value);
    statusParams(value);
  };
  return (
    <Select
      value={selectValue as string | undefined}
      onValueChange={handleSelect}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select an option</SelectLabel>
          {selectOptions &&
            selectOptions.map((elem, index) => {
              return (
                <SelectItem
                  key={`${index}_${elem.value}`}
                  value={elem.value as string}
                >
                  {elem.name}
                </SelectItem>
              );
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
