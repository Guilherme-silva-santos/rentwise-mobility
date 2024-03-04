import { ActivityIndicator, StyleSheet, View } from 'react-native'
import theme from '../../theme'

export function LoadIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={25} color={theme.COLORS.BRAND_LIGHT} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_800,
  },
})
