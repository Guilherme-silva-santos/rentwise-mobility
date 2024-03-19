import { Text, TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'
import theme from '../../theme'

type Props = TextInputProps & {
  label: string
}

export function LincensePlateInput({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        maxLength={7}
        autoCapitalize="characters"
        placeholderTextColor={theme.COLORS.GRAY_400}
        {...rest}
      />
    </View>
  )
}
