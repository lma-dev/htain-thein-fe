import { useQuery, QueryKey } from '@tanstack/react-query';

// Generic type for the query function
type ApiFn<T> = () => Promise<T>;

// useFetchQuery with generic type
export const useFetchQuery = <T>(key: QueryKey, apiFn: ApiFn<T>) => {
  return useQuery<T>({
    queryKey: key,
    queryFn: apiFn,
    staleTime: 5 * 60 * 1000,
  });
};

// useFetchQueryWithParams with generic type and parameterized function
type ApiFnWithParams<T, P> = (param: P) => Promise<T>;

export const useFetchQueryWithParams = <T, P>(key: QueryKey, apiFn: ApiFnWithParams<T, P>, param: P) => {
  return useQuery<T>({
    queryKey: [key, param],
    queryFn: () => apiFn(param),
    staleTime: 5 * 60 * 1000,
  });
};
