
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";


export function useItems(){
    
    const context = useContext(ItemsContext)

    if(!context)
        throw new Error("useUser must be used within a ItemsProvider")

    return context
}