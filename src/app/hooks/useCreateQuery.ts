import { useMutation, useQueryClient,UseMutationResult } from "@tanstack/react-query";

export const useCreateQuery = <TData>(
  apiFn: (data: TData) => Promise<void>
): UseMutationResult<void, unknown, TData> => {
  return useMutation({
    mutationFn: apiFn,
  });
};

export const useDoubleParameterCreateQuery = <TData, TId>(
  key: string,
  apiFn: (id: TId, data: TData) => Promise<void>
) => {
  const queryClient = useQueryClient(); // Obtain queryClient

  return useMutation<void, unknown, { id: TId, data: TData }>({
    mutationFn: ({ id, data }) => {
      return apiFn(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};
