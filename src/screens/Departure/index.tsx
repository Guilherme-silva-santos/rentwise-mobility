import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { LincensePlateInput } from '../../components/LincensePlateInput'

export function Departure() {
  return (
    <View style={styles.container}>
      <Header title="Saída" />

      <View style={styles.content}>
        <LincensePlateInput label="placa do veículos" placeholder="BRA1234" />
      </View>
    </View>
  )
}
