import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_800,
  },

  content: {
    flex: 1,
    gap: 16,
    padding: 32,
    marginTop: 16,
  },
})
