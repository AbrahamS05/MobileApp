
import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUsers";

const DATABASE_ID = "685dfb3f0001b5820e17"
const COLLECTION_ID = "685dfc66000b8302abd7"

export const ItemsContext = createContext()

export function ItemsProvider({ children }){
    const [items, setItems] = useState([])
    const { user } = useUser()

    async function fetchItems(){
        try{

        }catch(error){
            console.error(error.message)
        }


    }

    async function fetchItemByID(id){
        try{

        }catch(error){
            console.error(error.message)
        }
    }

    async function createItem(data) {
        try{
            const newItem = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),

                ]
            )


        }catch(error){
            console.error(error.message)
        }
    }


    async function deleteItem(id) {
        try{

        }catch(error){
            console.error(error.message)
        }
    }

    return(
        <ItemsContext.Provider
            value={{ items, fetchItems, fetchItemByID, createItem, deleteItem}}
        >
            {children}
        </ItemsContext.Provider>
    )

}