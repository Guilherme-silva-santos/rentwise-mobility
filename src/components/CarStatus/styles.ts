import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    marginHorizontal: 0,
    padding: 22,
    borderRadius: 6,

    backgroundColor: theme.COLORS.GRAY_700,

    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 77,
    height: 77,
    borderRadius: 6,

    backgroundColor: theme.COLORS.GRAY_600,

    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  message: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,

    flex: 1,
    textAlign: 'justify',
    textAlignVertical: 'center',
  },

  textHighlit: {
    color: theme.COLORS.BRAND_LIGHT,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
})
