import { useQuery } from "@tanstack/react-query"
import {  viewContact } from "../api/contactApi"

export const useViewContact = ()=>{
    const {data : contacts, isLoading} = useQuery({
        queryKey : ["contacts"],
        queryFn : viewContact,
        refetchInterval : 1000
    })

    return {contacts, isLoading}
}

export const useSearchContact = ()=>{
    const {data : search, isLoading} = useQuery({
        queryKey : ["searchContacts"],
        queryFn : viewContact,
        refetchInterval : 1000
    })

    return {search, isLoading}
}

// export const useViewtask = () =>{
//     const {data : tasks, isLoading} = useQuery({
//         queryKey: ["view"],
//         queryFn : viewApi,
//         refetchInterval : 1000
//     })

//     return {tasks, isLoading}
// }