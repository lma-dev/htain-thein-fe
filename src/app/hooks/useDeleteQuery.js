import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteQuery = (key,apiFn) => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: async (userId) => {
              return await apiFn(userId); 
            },
              onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [key] })
              },
              onError: (error, variables, context) => {
                // I will fire first
              },
              onSettled: (data, error, variables, context) => {
                // I will fire first
              },
        }
    )
}
