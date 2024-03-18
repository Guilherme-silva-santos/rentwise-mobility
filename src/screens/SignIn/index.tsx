import { useState } from 'react'
import { Alert, ImageBackground, Text } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Realm, useApp } from '@realm/react'

import { styles } from './styles'
import { Button } from '../../components/Button/button'
import backGroundImg from '../../assets/background.png'
import { WEB_CLIENT_ID } from '@env'

// foi criado uma credencial de autenticação oauth dentro do google cloud
// para que fosse usada com essa lib, essa credencial está dentro do
// .env na variavel webclientid
// configurando a parte de autenticação com a conta do google
GoogleSignin.configure({
  // o que vai ser acessado da conta do usuário,
  // isso foi setado la dentro do gcp(ggole cloud) quando foi criado o projeto
  scopes: ['email', 'profile'],

  webClientId: WEB_CLIENT_ID,
})

export function SignIn() {
  // estado para quando o user estiver se autenticando aparecer o loading no botão
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      /**
       * quando clicar no botão ativa o isauthenticating
       * e com o Googlesigning faz o sigin do user
       * pegando da autenticação apenas o idtoken
       */
      setIsAuthenticating(true)

      const { idToken } = await GoogleSignin.signIn()
      if (idToken) {
        /**
        // se houver o idtoken
        // e passa para ele a varial ambiente webclient id la dentro do atlas
        // para que o login do user seja passada lá dentro do atlas
       */
        // criando a credencial para conectar o user na aplicação
        // para entender que a credencial do user é um idtoken e como foi
        // setado no atlas ele é um jwt
        const credentials = Realm.Credentials.jwt(idToken)

        await app.logIn(credentials)
      } else {
        Alert.alert('Entrar', 'Não foi possível	conectar-se a sua conta Google')
        setIsAuthenticating(false)
      }
    } catch (error) {
      console.log(error)
      setIsAuthenticating(false)
      Alert.alert('Entrar', 'Não foi possível	conectar-se a sua conta Google')
    }
  }

  return (
    <ImageBackground source={backGroundImg} style={styles.container}>
      <Text style={styles.title}>RentWise Mobility </Text>
      <Text style={styles.slogan}>Gestão de uso de veículos</Text>
      <Button
        title="Entrar com o Google"
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </ImageBackground>
  )
}
