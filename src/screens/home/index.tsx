import { View } from 'react-native'
import { styles } from './styles'
import { HomeHeader } from '../../components/HomeHeader'
import { CarStatus } from '../../components/CarStatus'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const { navigate } = useNavigation()

  function handleRegisterMovement() {
    navigate('departure')
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.content}>
        <CarStatus onPress={handleRegisterMovement} />
      </View>
    </View>
  )
}
