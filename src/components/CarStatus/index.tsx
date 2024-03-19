import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native'
import { styles } from './styles'
import { Key, Car } from 'phosphor-react-native'
import theme from '../../theme'

type Props = TouchableOpacityProps & {
  licensesPlate?: string | null
}

// se o licenseplate não for declarado ele é nulo
export function CarStatus({ licensesPlate = null, ...rest }: Props) {
  // se hover uma placa usa uma menssagem senão usa o outro o licenseplate é passado como uma propriedade para o componente
  const message = licensesPlate
    ? `${licensesPlate} em uso.`
    : `Nenhum veículo em uso.`
  const status = licensesPlate ? 'chegada' : 'saída'

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <View style={styles.iconBox}>
        {licensesPlate ? (
          <Car size={32} color={theme.COLORS.BRAND_LIGHT} />
        ) : (
          <Key size={32} color={theme.COLORS.BRAND_LIGHT} />
        )}
      </View>
      <Text style={styles.message}>
        {message}{' '}
        <Text style={styles.textHighlit}>
          Clique aqui para registrar a {status}
        </Text>
      </Text>
    </TouchableOpacity>
  )
}
