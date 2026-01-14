import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'react-native'
import { UserProvider } from '../contexts/UserContext'
import { ItemsProvider } from '../contexts/ItemsContext'

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light


  return (
    <UserProvider>
      <ItemsProvider>

        <StatusBar value="auto" />
            <Stack screenOptions={{
              headerStyle: {backgroundColor: theme.navBackground},
              headerTintColor: theme.title,
            }}>
              <Stack.Screen name='index' options={{ title: 'Homepage'}}/>
              <Stack.Screen name='(auth)' options={{ headerShown: false}}/>
              <Stack.Screen name='(dashboard)' options={{ headerShown: false}}/>


          </Stack>
      </ItemsProvider>

    </UserProvider>

  )
}

export default RootLayout

const styles = StyleSheet.create({
    
})