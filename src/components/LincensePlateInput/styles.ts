/* eslint-disable react-hooks/rules-of-hooks */
import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
    borderRadius: 6,
    backgroundColor: theme.COLORS.GRAY_700,
  },

  label: {
    color: theme.COLORS.GRAY_300,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  input: {
    color: theme.COLORS.GRAY_200,
    fontSize: theme.FONT_SIZE.XL,
    fontFamily: theme.FONT_FAMILY.BOLD,

    textAlign: 'center',
    marginTop: 16,
  },
})
