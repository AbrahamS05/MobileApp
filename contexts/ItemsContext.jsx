
import { createContext, useEffect, useState } from "react";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUsers";

const DATABASE_ID = "685dfb3f0001b5820e17"
const COLLECTION_ID = "685dfc66000b8302abd7"

export const ItemsContext = createContext()

export function ItemsProvider({ children }){
    const [items, setItems] = useState([])
    const { user } = useUser()

    async function fetchItems(){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userId', user.$id)
                ]

            )

            setItems(response.documents)
            console.log(response.documents)
        }catch(error){
            console.error(error.message)
        }


    }

    async function fetchItemById(id){
        try{
            const response = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
                
            )
            return response

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

    useEffect(() => {
        let unsubscribe
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`
        
        if(user){
            fetchItems()

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response

                if(events[0].includes('create')){
                  setItems((prevItems) => [...prevItems, payload])   
                }
            })
        } else{
            setItems([])
        }

        return () => {
            if(unsubscribe)
             unsubscribe()
        }

    }, [user])

    return(
        <ItemsContext.Provider
            value={{ items, fetchItems, fetchItemById, createItem, deleteItem}}
        >
            {children}
        </ItemsContext.Provider>
    )

}