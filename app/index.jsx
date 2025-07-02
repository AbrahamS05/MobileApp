import { StyleSheet, Text, Image } from "react-native";
import img from '../assets/img/GL-logo-blk.png'
import { Link } from 'expo-router'

//themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {

    return(
        <ThemedView style={styles.container} >
            <ThemedLogo style={styles.img} />


            <ThemedText style={styles.title} title={true}>Software Solutions</ThemedText>
            
            <Spacer height={10}/>
            <ThemedText> DEMO APP</ThemedText>
            <Spacer />

        <Link href="/login" style={styles.Link}> 
            <ThemedText>
                Login Page
            </ThemedText>
            </Link>

        <Link href="/register" style={styles.Link}> 
            <ThemedText>
                Register Page
            </ThemedText>
            </Link>
        <Link href="/profile" style={styles.Link}> 
            <ThemedText>
                Profile Page
            </ThemedText>
            </Link>

        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    },
      img:{
        width: 200,  
        height: 200, 
        marginTop: 20,
        resizeMode: 'contain' 
    },
    Link:{
        marginVertical: 10,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        boxShadow:'0px 5px 5px 2px rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 10,
    },

})