import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateQuery = (key,apiFn, id) => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: (data) => {
                return apiFn(data)
            },
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [key] })

              },
        }
    )
}
