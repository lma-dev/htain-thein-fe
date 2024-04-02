import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateQuery = (key, apiFn) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data = null }) => {
      return await apiFn(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};
