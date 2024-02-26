import { useMutation } from "@tanstack/react-query";



const useCreateQuery = (data, service) => {
    return useMutation(
        {
            mutationFn: (data) => {
                return service(data)
            },
        }
    )
}


export default useCreateQuery;