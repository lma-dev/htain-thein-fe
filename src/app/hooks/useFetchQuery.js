"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchSingleData } from "../libs/ApiRequestHelper";

export const useFetchQuery = (key, apiFn) => {
  return useQuery({ queryKey: [key], queryFn: apiFn, cached: true });
};

export const useFetchQueryWithParams = (key, id) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: () => fetchSingleData(id),
    cached: true,
  });
};
