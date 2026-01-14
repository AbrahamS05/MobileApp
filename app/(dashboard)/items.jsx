
import { StyleSheet, FlatList, Pressable } from "react-native";
import { useItems } from '../../hooks/useItems';
import { Colors } from '../../constants/Colors';

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedCard from '../../components/ThemedCard';
import { useRouter } from "expo-router";


const Items = () => {

    const { items } = useItems()
    const router = useRouter()


    return(
        <ThemedView style={styles.container} safe={true}>
            
            <Spacer/>

            <ThemedText title={true} style={styles.heading}>
                Your Invetory
            </ThemedText>

            <Spacer/>

            <FlatList
                data={items}
                keyExtractor={(item) => item.$id}
                contentContainerStyle={styles.list}
                renderItem={({item}) => (
                    <Pressable onPress={() => router.push(`/items/${item.$id}`)}>
                        <ThemedCard style={styles.card}>
                            <ThemedText style={styles.title}>{item.title}</ThemedText>

                            <ThemedText>Quantity: {item.quantity}</ThemedText>

                        </ThemedCard>
                    </Pressable>
                )}
            />


        </ThemedView>
    )
}

export default Items


const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        alignItems:'stretch',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    list:{
      marginTop: 40,  
    },
    card:{
        width:'90%',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

})