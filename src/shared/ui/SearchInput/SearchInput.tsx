'use client';

import React, { useEffect, useRef, useState } from 'react';

import { cn } from '../../lib/utils/utils';

export type AnimatedEntity = {
  id: number;
  url: string;
  name: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  status: string;
  type: string | undefined;
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  created: string;
  gender: string;
  image: string;
};

type SearchInputPropTypes = {
  outputValue: (value: AnimatedEntity[] | null) => void;
  statusParams: string | null;
};

export const SearchInput = ({
  outputValue,
  statusParams,
}: SearchInputPropTypes) => {
  const inputRef = useRef<string | null>(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!searchValue) {
      outputValue(null);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        outputValue(null);

        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchValue)}${statusParams !== null ? `&status=${statusParams}` : ''}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          // eslint-disable-next-line no-console
          console.log('something went wrong');
        }
        const data = await res.json();
        outputValue(data.results);
        // eslint-disable-next-line no-console
        console.log(data.results);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          // eslint-disable-next-line no-console
          console.error('Fetch error:', err);
        }
      }
    };

    fetchData();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, statusParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = event.target.value;

    if (searchValue !== inputRef.current) {
      setTimeout(() => {
        if (inputRef.current !== null) {
          setSearchValue(String(inputRef.current));
        }
      }, 500);
    }
  };

  return (
    <input
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
      )}
      type="text"
      onChange={handleChange}
    />
  );
};
