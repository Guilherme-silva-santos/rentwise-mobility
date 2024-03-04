/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import { SignIn } from './src/screens/SignIn'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { LoadIndicator } from './src/components/Loading'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold,})
  return (
    <>
     <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
    {!fontsLoaded ? <LoadIndicator/> : < SignIn/>}
    </>
  )
}
