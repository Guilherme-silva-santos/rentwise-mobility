/* eslint-disable react/no-children-prop */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import 'react-native-get-random-values'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { AppProvider, UserProvider } from '@realm/react'
import { REALM_DB_ID } from '@env'

import { LoadIndicator } from './src/components/Loading'
import { SignIn } from './src/screens/SignIn'
import { Routes } from './src/routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RealmProvider } from './src/libs/realm'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, })

  if (!fontsLoaded) {
    return <LoadIndicator />
  }
  return (
    // acessa a aplicação do realm para que seja possivel acompanhar os dados de
    <AppProvider id={REALM_DB_ID}>
      <SafeAreaProvider style={{flex: 1, backgroundColor: theme.COLORS.GRAY_800}}>

        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {/* responsável pela autenticação em si do usuário 
        dentro dele existe ua condição, se o user não estiver logado, com o fallback 
        ele vai ser redirecionado para a tela de login 
        se ele estiver logado vai ser direcionado para home
      */}
        <UserProvider fallback={SignIn}>
          {/* para que a aplicação tenha acesso ao banco e precisa estar dentro do UserProvider para que ele teha acesso ao user autenticado   */}
          <RealmProvider>
            <Routes />
          </RealmProvider>
        </UserProvider>
      </SafeAreaProvider>
    </AppProvider>
  )
}
