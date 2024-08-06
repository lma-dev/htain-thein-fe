"use client";

import { useQuery } from "@tanstack/react-query";

export const useFetchQuery = (key, apiFn) => {
  return useQuery({
    queryKey: key,
    queryFn: apiFn,
    cached: true,
  });
};

export const useFetchQueryWithParams = (key, apiFn, id) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: () => apiFn(id),
    cached: true,
  });
};
