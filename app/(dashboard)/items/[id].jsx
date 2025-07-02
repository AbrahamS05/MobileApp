import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { useItems } from '../../../hooks/useItems'

import ThemedText from '../../../components/ThemedText'
import ThemedButton from "../../../components/ThemeButton"
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'



const ItemDetails = () => {
    const [item, setItem] = useState(null)
    
    const { id } = useLocalSearchParams()

    const { fetchItemById } = useItems()

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
    }
})