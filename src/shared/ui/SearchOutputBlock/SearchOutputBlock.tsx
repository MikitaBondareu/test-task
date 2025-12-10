'use client';

import React, { useState } from 'react';

import type { AnimatedEntity } from '../SearchInput/SearchInput';
import { SearchInput } from '../SearchInput/SearchInput';
import SelectField from '../SelectField/SelectField';

const SearchOutputBlock = () => {
  const [searchResults, setSearchResults] = useState<AnimatedEntity[] | null>(
    null
  );
  const [statusParams, setStatusParams] = useState<string | null>(null);

  return (
    <>
      <SearchInput
        outputValue={value => {
          setSearchResults(value);
        }}
        statusParams={statusParams}
      />
      <SelectField
        selectOptions={[
          { value: null, name: 'All' },
          { value: 'Dead', name: 'Dead' },
          { value: 'Alive', name: 'Alive' },
        ]}
        statusParams={value => setStatusParams(value)}
      />
      {searchResults && (
        <ul>
          {searchResults.map((elem, index) => {
            return (
              <li key={`${index}+${elem.name}`}>
                <img src={elem.image} alt={elem.name} />
                <p>{elem.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SearchOutputBlock;
