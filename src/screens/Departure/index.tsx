import {
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native'
import { useRef, useState } from 'react'

import { LicensePlateInput } from '../../components/LincensePlateInput'
import { TextAreaInput } from '../../components/TextareaInput'
import { Button } from '../../components/Button/button'
import { Header } from '../../components/Header'

import { styles } from './styles'
import { licensePlateValidate } from '../../utils/licensePlateValidade'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const [description, setdescription] = useState('')
  const [lisenceplate, setLincesePlate] = useState('')

  // criando referência do input para usar o botão do teclado para direcionar o user para o proximo input
  const descriptionRef = useRef<TextInput>(null)
  const licensePlateRef = useRef<TextInput>(null)

  // cadastro
  function handleDepartureRegister() {
    // se o padrão da placa não bater
    if (!licensePlateValidate(lisenceplate)) {
      licensePlateRef.current?.focus()
      return Alert.alert(
        'Placa Inválida',
        'A placa é inválida. Por favor informe a placa correta do veículo',
      )
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
            <Button title="Registrar Saída" onPress={handleDepartureRegister} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
