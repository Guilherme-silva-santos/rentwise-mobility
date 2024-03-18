/* eslint-disable react-hooks/rules-of-hooks */
import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_700,
  },
  greeting: {
    flex: 1,
    marginLeft: 12,
  },

  message: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },

  name: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.LG,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },

  picture: {
    width: 54,
    height: 54,
    borderRadius: 999,
  },
})
