import {
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRef, useState } from 'react'

import { LicensePlateInput } from '../../components/LincensePlateInput'
import { TextAreaInput } from '../../components/TextareaInput'
import { Button } from '../../components/Button/button'
import { Header } from '../../components/Header'

import { styles } from './styles'

import { licensePlateValidate } from '../../utils/licensePlateValidade'

import { useUser } from '@realm/react'
import { Historic } from '../../libs/realm/schemas/Historic'
import { useRealm } from '../../libs/realm'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const [description, setdescription] = useState('')
  const [licenseplate, setLincesePlate] = useState('')
  const [isRegistring, setIsRegistring] = useState(false)

  // criando referência do input para usar o botão do teclado para direcionar o user para o proximo input
  const descriptionRef = useRef<TextInput>(null)
  const licensePlateRef = useRef<TextInput>(null)

  // para que haja acesso ao banco de dados e que seja possivel fazer alterações nele
  const realm = useRealm()
  const user = useUser()
  const { goBack } = useNavigation()

  // cadastro
  function handleDepartureRegister() {
    try {
      // se o padrão da placa não bater
      if (!licensePlateValidate(licenseplate)) {
        licensePlateRef.current?.focus()
        return Alert.alert(
          'Placa Inválida',
          'A placa é inválida. Por favor informe a placa correta do veículo',
        )
      }

      if (description.trim().length <= 5) {
        descriptionRef.current?.focus()
        Alert.alert(
          'Finalidade',
          'Por favor, informe a finalidade de utilização do veículo, o campo de finalidade deve conter 6 caracteres',
        )
      }
      setIsRegistring(true)

      // qualquer ação que for feita dentro do banco deve ser feita com o metodo write
      // e como ele é uma transação caso algo dê errado ele desfaz, caso seja necessario fazer uma
      // leitura por exemplo, não será necessario fazer com esse metodo pois não irá alterar nenhum dado
      realm.write(() => {
        // primeiro nome da coleção, e por fim o schema em si
        // pois nele está os dados que precisam ser passado para armazenar no banco
        realm.create(
          'Historic',
          Historic.generate({
            // o restante dos dados que estão dentro do schema são gerados automaticamente
            // para validar isso abrir o schema
            user_id: user!.id,
            license_plate: licenseplate.toUpperCase(),
            description,
          }),
        )
      })

      Alert.alert('Saída', 'Saída do veículo registrada com sucesso!')
      goBack()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível registrar a saída do veículo')
      setIsRegistring(false)
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Saída" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={keyboardAvoidingViewBehavior}
      >
        <ScrollView>
          <View style={styles.content}>
            <LicensePlateInput
              ref={licensePlateRef}
              label="placa do veículos"
              placeholder="BRA1234"
              // para que p user seja direcionado para o input através da ref, ele chama o proximo input
              onSubmitEditing={() => descriptionRef.current?.focus()}
              returnKeyType="next"
              onChangeText={setLincesePlate}
            />
            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o veículo para..."
              // chama a função para fazer o submit do form
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              // como é um multline a odefaultseria quebrar as linhas, mas com o bluroncubmit ele "esconde" essa funcionalidade
              blurOnSubmit
              onChangeText={setdescription}
            />
            <Button
              title="Registrar Saída"
              onPress={handleDepartureRegister}
              isLoading={isRegistring}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
