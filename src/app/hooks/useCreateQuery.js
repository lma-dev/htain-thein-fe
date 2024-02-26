import { useMutation } from "@tanstack/react-query";

export const useCreateQuery = (apiFn) => {
    return useMutation(
        {
            mutationFn: (data) => {
                return apiFn(data)
            },
        }
    )
}
