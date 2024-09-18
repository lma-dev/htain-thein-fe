import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateQuery = (key: string, apiFn: (id: number, data?: any) => Promise<any>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data?: any }) => apiFn(id, data),
    onSuccess: (data, { id }) => {
      queryClient.setQueryData([key, { id }], data);
      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
