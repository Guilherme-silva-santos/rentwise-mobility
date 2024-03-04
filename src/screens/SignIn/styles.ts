import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 52,
    backgroundColor: theme.COLORS.GRAY_800,
  },
  title: {
    color: theme.COLORS.BRAND_LIGHT,
    fontSize: theme.FONT_SIZE.XXXL,
    fontFamily: theme.FONT_FAMILY.BOLD,
    textAlign: 'center',
  },
  slogan: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    textAlign: 'center',

    marginBottom: 32,
  },
})
