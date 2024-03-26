import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateQuery = (apiFn) => {
  return useMutation({
    mutationFn: (data) => {
      return apiFn(data);
    },
  });
};

export const useDoubleParameterCreateQuery = (key, apiFn) => {
  const queryClient = useQueryClient(); // Obtain queryClient

  return useMutation({
    mutationFn: ({ id, data }) => {
      return apiFn(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};
