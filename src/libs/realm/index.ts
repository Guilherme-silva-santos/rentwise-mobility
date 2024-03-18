import { createRealmContext } from '@realm/react'
import { Historic } from './schemas/Historic'

export const {
  // provider para acesso ao banco
  RealmProvider,
  // Usar a instancia do banco de dados(usado para fazer o crud)
  useRealm,
  // para consultas no banco
  useQuery,
  // para obter informações de um objeto em específico
  useObject,
} = createRealmContext({
  schema: [Historic],
})
