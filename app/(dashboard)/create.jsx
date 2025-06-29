
import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useItems } from "../../hooks/useItems";
import { useRouter } from "expo-router";
import { useState } from "react";


import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemeButton from "../../components/ThemeButton";
import ThemedTextInput from "../../components/ThemeTextInput";



const Create = () => {

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [quantity, setQuantity] = useState("")
const [loading, setLoading] = useState(false)


const { createItem } = useItems()
const router = useRouter()

const handleSubmit = async () => {
    if(!title.trim() || !quantity.trim() || !description.trim())
        return
    setLoading(true)

    await createItem({ title, quantity, description})

    //reset fields
    setTitle("")
    setQuantity("")
    setDescription("")

    //redirect
    router.replace('/items')

    //reset loading
    setLoading(false)

}



    return(
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                
                <ThemedText title={true} style={styles.heading}>
                    Add A New Item
                </ThemedText>

                <Spacer/>

                <ThemedTextInput
                    style={styles.input}
                    placeHolder="Item Title"
                    value={title}
                    onChangeText={setTitle}
                    />

                    <Spacer/>
          
                <ThemedTextInput
                    style={styles.multiline}
                    placeHolder="Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                    />

                    <Spacer/>

                <ThemedTextInput
                    style={styles.input}
                    placeHolder="Item Quantity"
                    value={quantity}
                    onChangeText={setQuantity}
                    />

                <Spacer/>

                <ThemeButton onPress={handleSubmit} disabled={loading}>
                    <Text style={{color: 'white'}}>
                        {loading ? "Saving..." : "Create Item"}

                    </Text>
                </ThemeButton>


            </ThemedView>
       </TouchableWithoutFeedback>
    )
}

export default Create
    
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    input:{
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    },
    multiline:{
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    },

})
