import { Text, View, TouchableOpacity } from 'react-native'
import { useUser, useApp } from '@realm/react'

import { Image } from 'expo-image'
import { Power } from 'phosphor-react-native'

import theme from '../../theme'
import { styles } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function HomeHeader() {
  const user = useUser()
  const app = useApp()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 32

  function handleLogOut() {
    app.currentUser?.logOut()
  }

  // sempre que for usar o phospor lembrar de instalar o expo svg
  // para carregar iagens do usuario usar o expo image pois ele usa o sistema de caching
  return (
    <View style={[styles.container, { paddingTop }]}>
      <Image
        source={{ uri: user?.profile.pictureUrl }}
        placeholder="L184i9offQof00ayfQay~qj[fQj[s"
        style={styles.picture}
        alt=""
      />
      <View style={styles.greeting}>
        <Text style={styles.message}>Olá</Text>
        <Text style={styles.name}>{user?.profile.name}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogOut}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </View>
  )
}
