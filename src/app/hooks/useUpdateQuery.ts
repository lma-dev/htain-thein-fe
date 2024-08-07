import { useMutation,QueryKey, useQueryClient, UseMutationResult } from "@tanstack/react-query";


type UpdateApiFn<T, P> = (id: P, data?: T | null) => Promise<void>;

type MutationPayload<T, P> = {
  id: P;
  data?: T | null;
};

export const useUpdateQuery = <T, P>(key: QueryKey, apiFn: UpdateApiFn<T, P>): UseMutationResult<void, Error, MutationPayload<T, P>> => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data = null }: MutationPayload<T, P>) => {
      return await apiFn(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: (error: any) => {
      throw new Error(error);
    },
  });
};