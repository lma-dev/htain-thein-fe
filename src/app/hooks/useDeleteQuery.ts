import { useMutation, useQueryClient,QueryKey,UseMutationResult } from "@tanstack/react-query";

type DeleteApiFn<P> = (id: P) => Promise<void>;


export const useDeleteQuery = <P>(key: QueryKey, apiFn: DeleteApiFn<P>): UseMutationResult<void, Error, P> => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (userId: P) => {
      return await apiFn(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};
