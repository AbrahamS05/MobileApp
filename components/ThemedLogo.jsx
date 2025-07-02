import { Image, View, useColorScheme } from 'react-native'
import {  Colors } from '../constants/Colors'

import DarkLogo from '../assets/img/GL-logo-blk.png'
import lightLogo from '../assets/img/GL-logo-white.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme();

    const logo = colorScheme == 'dark' ? lightLogo : DarkLogo


    return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo

