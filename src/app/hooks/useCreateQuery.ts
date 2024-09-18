import { useMutation, useQueryClient,UseMutationResult } from "@tanstack/react-query";

export const useCreateQuery = <TData>(
  apiFn: (data: TData) => Promise<void>,
  queryKey?: string | (string | number)[]
): UseMutationResult<void, unknown, TData> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiFn,
    onSuccess: () => {
      if(queryKey){
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      }
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });
};
