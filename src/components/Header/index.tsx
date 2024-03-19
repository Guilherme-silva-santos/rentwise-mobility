import { TouchableOpacity, View, Text } from 'react-native'

import { styles } from './styles'
import { ArrowLeft } from 'phosphor-react-native'

import theme from '../../theme'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 40
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  return (
    <View style={[styles.container, { paddingTop }]}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
        <ArrowLeft size={24} weight="bold" color={theme.COLORS.BRAND_LIGHT} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
