import { useMutation, useQueryClient, UseMutationResult, QueryKey } from "@tanstack/react-query";

type DeleteApiFn<P> = (id: P) => Promise<void>;

export const useDeleteQuery = <P>(key: QueryKey, apiFn: DeleteApiFn<P>): UseMutationResult<void, Error, P> => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: P) => {
      await apiFn(id);
    },
    onSuccess: () => {
      // Invalidate the query with the provided key
      queryClient.invalidateQueries({ queryKey: key });
    },
  });
};
