import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    padding: 16,

    borderRadius: 6,
    backgroundColor: theme.COLORS.GRAY_700,
  },

  label: {
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.GRAY_300,
  },

  input: {
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.GRAY_300,

    // para que o texto fique alinhado no topo
    verticalAlign: 'top',
    marginTop: 16,
  },
})
