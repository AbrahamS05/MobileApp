

import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import UserOnly from '../../components/auth/UserOnly'


const DashboardLayout = () => {

const colorScheme = useColorScheme()
const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserOnly>
        <Tabs
            screenOptions={{headerShown: false, tabBarStyle: {
                backgroundColor: theme.navBackground,
                height: 150,
                bottom: 0,
                justifyContent: 'center',
                alignItems:'center',
                paddingTop: 10,
                
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor
            
        }}
        >

            <Tabs.Screen name="profile" options={{title: 'profile', tabBarIcon: ({ focused })=>{
                <Ionicons 
                size={24}
                name={focused ? 'person' : 'person-outline'} 
                color={focused ? theme.iconColorFocused: theme.iconColor}/>
            }}}/>

            <Tabs.Screen name="items" options={{title: 'Items', tabBarIcon: ({ focused }) => {
                <Ionicons 
                size={24} 
                name={focused ? 'checkbox' : 'checkbox-outline'} 
                color={focused ? theme.iconColorFocused: theme.iconColor}/>
            }}}/>

            <Tabs.Screen name="create" options={{title: 'Create',  tabBarIcon: ({ focused }) => {
                <Ionicons 
                size={24} 
                name={focused ? 'create' : 'create-outline'} 
                color={focused ? theme.iconColorFocused: theme.iconColor}/>
            }}}/>

        </Tabs>
    </UserOnly>

  )
}

export default DashboardLayout