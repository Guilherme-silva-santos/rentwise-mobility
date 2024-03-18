import { View, Text } from 'react-native'
import { styles } from './styles'
import { Key, Car } from 'phosphor-react-native'
import theme from '../../theme'

type Props = {
  licensesPlate?: string | null
}

// se o licenseplate não for declarado ele é nulo
export function CarStatus({ licensesPlate = null }: Props) {
  const Icon = licensesPlate ? Key : Car
  const message = licensesPlate
    ? `${licensesPlate} em uso.`
    : `Nenhum veículo em uso.`
  const status = licensesPlate ? 'chegada' : 'saída'

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Icon size={32} color={theme.COLORS.BRAND_LIGHT} />
      </View>
      <Text style={styles.message}>
        {message}{' '}
        <Text style={styles.textHighlit}>
          clique aqui para registrar a {status}
        </Text>
      </Text>
    </View>
  )
}
