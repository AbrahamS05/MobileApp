import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { useItems } from '../../../hooks/useItems'

import ThemedText from '../../../components/ThemedText'
import ThemedButton from "../../../components/ThemeButton"
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/Colors'



const ItemDetails = () => {
    const [item, setItem] = useState(null)
    
    const { id } = useLocalSearchParams()

    const { fetchItemById, deleteItem } = useItems()

    const router = useRouter()

    const handleDelete = async () => {
        await deleteItem(id)
        setItem(null)
        router.replace('/items')
    }

    useEffect(() => {
        async function loadItem() {
            const itemData = await fetchItemById(id)
            setItem(itemData)

        }
        loadItem()

    }, [id])

    if (!item){
        return(
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }
    
    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{item.title}</ThemedText>
                <ThemedText>Quantity: {item.quantity}</ThemedText>
                <Spacer/>

                <ThemedText title={true}>Item Description:</ThemedText>
                <Spacer height={10}/>
                <ThemedText>{item.description}</ThemedText>
            </ThemedCard>

            <ThemedButton style={styles.delete} onPress={handleDelete}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                    Delete Item
                </Text>
            </ThemedButton>

        </ThemedView>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'stretch',
    },
    title:{
        fontSize: 22,
        marginVertical: 10,
    },
    card:{
        margin: 20
    },
    delete:{
        marginTop:40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center',
    },
})