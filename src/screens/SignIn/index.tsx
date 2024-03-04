import { ImageBackground, Text } from 'react-native'
import { styles } from './styles'
import backGroundImg from '../../assets/background.png'
import { Button } from '../../components/button/button'

export function SignIn() {
  return (
    <ImageBackground source={backGroundImg} style={styles.container}>
      <Text style={styles.title}>RentWise Mobility </Text>
      <Text style={styles.slogan}>Gestão de uso de veículos</Text>
      <Button title="Entrar com o Google" />
    </ImageBackground>
  )
}
