import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native"
import { Link } from "expo-router"
import { Colors } from "../../constants/Colors"
import { useState } from "react"

import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import Spacer from "../../components/Spacer"
import ThemedButton from "../../components/ThemeButton"
import ThemeTextInput from "../../components/ThemeTextInput"
import { useUser } from "../../hooks/useUsers"

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)

const { login } = useUser()


const handleSubmit = async () => {
        try{
            await login(email, password)
            // console.log('current user is:', user)
        }catch(error){
            setError(error.message)
        }
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ThemedView style={styles.container}>
                <Spacer/>
                <ThemedText title={true} style={styles.title}>
                    Login to your account
                </ThemedText>


            <ThemeTextInput
                style={{width: '80%', marginBottom: 20}}
                placeholder="Email"
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
                />


            <ThemeTextInput
                style={{width: '80%', marginBottom: 20}}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                />


        <ThemedButton onPress={handleSubmit}>
                <Text style={{color: 'white'}}>
                    Login
                </Text>
        </ThemedButton>

            <Spacer/>
            {error && <Text style={styles.error}>{error}</Text>}

                <Spacer height={100}/>

                <Link href='/register' style={{textAlign: 'center'}}>
                    <ThemedText>
                        Register instead
                    </ThemedText>
                </Link>
                
                    <Link
                    href='/'
                    >
                        <ThemedText>Go Home</ThemedText>
                    </Link>

        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:'center',
    },
    title:{
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
    btn:{
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },  
    pressed:{
        opacity: 0.8
    },
    error:{
      color: Colors.warning,
      padding:10,
      backgroundColor: '#f5c1c8',
      borderColor: Colors.warning,
      borderWidth: 1,
      borderRadius: 6, 
      marginHorizontal: 10,  
    },

})