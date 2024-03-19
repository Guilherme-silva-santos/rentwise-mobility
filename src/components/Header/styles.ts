import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 0,
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: theme.COLORS.GRAY_700,
    zIndex: 1,
  },

  title: {
    color: theme.COLORS.GRAY_100,
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.XL,
  },
})
