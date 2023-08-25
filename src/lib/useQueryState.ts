import type {
  HistoryOptions,
  UseQueryStateOptions,
  UseQueryStateReturn,
} from 'next-usequerystate';
import {
  queryTypes,
  useQueryState as _useQueryState,
} from 'next-usequerystate';
import { useEffect, useRef } from 'react';

function useQueryState<T>(
  key: string,
  options: UseQueryStateOptions<T> & { defaultValue: T },
): UseQueryStateReturn<
  NonNullable<ReturnType<typeof options.parse>>,
  typeof options.defaultValue
>;

function useQueryState<T>(
  key: string,
  options: UseQueryStateOptions<T>,
): UseQueryStateReturn<
  NonNullable<ReturnType<typeof options.parse>>,
  undefined
>;

function useQueryState(
  key: string,
  options: {
    history?: HistoryOptions;
    defaultValue: string;
  },
): UseQueryStateReturn<string, typeof options.defaultValue>;

function useQueryState(
  key: string,
  options: Pick<UseQueryStateOptions<string>, 'history'>,
): UseQueryStateReturn<string, undefined>;

function useQueryState(key: string): UseQueryStateReturn<string, undefined>;

function useQueryState<T = string>(
  key: string,
  options: Partial<UseQueryStateOptions<T>> & { defaultValue?: T } = {
    history: 'replace',
    parse: (x) => x as unknown as T,
    serialize: String,
    defaultValue: undefined,
  },
) {
  const [queryState, setQueryState] = _useQueryState(key, options);

  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const state = isFirstRender.current ? options.defaultValue : queryState;

  return [state, setQueryState] as [T, typeof setQueryState];
}

export { queryTypes, useQueryState };
