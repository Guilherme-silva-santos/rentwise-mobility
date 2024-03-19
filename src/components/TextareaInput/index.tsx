/* eslint-disable react/display-name */
import { Text, TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'
import theme from '../../theme'
import { forwardRef } from 'react'

type Props = TextInputProps & {
  label: string
}

// foi transformado em const para que seja possivel egar as referencias atraves do forwardRef
const TextAreaInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          ref={ref}
          style={styles.input}
          multiline
          autoCapitalize="sentences"
          placeholderTextColor={theme.COLORS.GRAY_400}
          {...rest}
        />
      </View>
    )
  },
)

export { TextAreaInput }
