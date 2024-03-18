import { View } from 'react-native'
import { styles } from './styles'
import { HomeHeader } from '../../components/HomeHeader'
import { CarStatus } from '../../components/CarStatus'

export function Home() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.content}>
        <CarStatus />
      </View>
    </View>
  )
}
