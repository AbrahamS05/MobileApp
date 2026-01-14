// import { Image, View, useColorScheme } from 'react-native'
// import {  Colors } from '../constants/Colors'

// import DarkLogo from '../assets/img/GL-logo-blk.png'
// import lightLogo from '../assets/img/GL-logo-white.png'

// const ThemedLogo = ({...props}) => {
//     const colorScheme = useColorScheme();

//     const logo = colorScheme == 'dark' ? lightLogo : DarkLogo


//     return (
//     <Image source={logo} {...props}/>
//   )
// }

// export default ThemedLogo

import { View, useColorScheme, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { Colors } from '../constants/Colors';

const ThemedLogo = ({ size = 100, ...props }) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View style={styles.container}>

            <Icon 
                name="laptop"   
                size={size}    
                color={theme.text} 
                />
            <Icon 
                name="hdd" 
                size={size}    
                color={theme.text} 
                />

        </View>
    );
};

export default ThemedLogo;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20,
  }
})