import { TextInput, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { LincensePlateInput } from '../../components/LincensePlateInput'
import { TextAreaInput } from '../../components/TextareaInput'
import { Button } from '../../components/Button/button'
import { useRef } from 'react'

export function Departure() {
  // criando referência do input para usar o botão do teclado para direcionar o user para o proximo input
  const descriptionRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
    console.log('ok')
  }

  return (
    <View style={styles.container}>
      <Header title="Saída" />

      <View style={styles.content}>
        <LincensePlateInput
          label="placa do veículos"
          placeholder="BRA1234"
          // para que p user seja direcionado para o input através da ref
          onSubmitEditing={() => descriptionRef.current?.focus()}
          returnKeyType="next"
        />
        <TextAreaInput
          ref={descriptionRef}
          label="Finalidade"
          placeholder="Vou utilizar o veículo para..."
          // para que no teclado haja um botão de submitting
          onSubmitEditing={handleDepartureRegister}
          returnKeyType="send"
          blurOnSubmit
        />
        <Button title="Registrar Saída" onPress={handleDepartureRegister} />
      </View>
    </View>
  )
}
