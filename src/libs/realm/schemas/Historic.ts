/* eslint-disable no-use-before-define */
import { Realm } from '@realm/react'
import { ObjectSchema } from 'realm'

type GenerateProps = {
  user_id: string
  description: string
  license_plate: string
}

export class Historic extends Realm.Object<Historic> {
  // campos que precisarão ser informadoas para criar o historico
  static generate({ user_id, description, license_plate }: GenerateProps) {
    return {
      _id: new Realm.BSON.UUID(),
      user_id,
      description,
      license_plate,
      status: 'departure',
      created_at: new Date(),
      updated_at: new Date(),
    }
  }

  // campos que pertencem a tabela de hiorico
  static schema: ObjectSchema = {
    // nome da coleçã
    name: 'Historic',
    // quem é a chave primaria
    primaryKey: '_id',

    // onde est]ao definidos os dados da coleção
    properties: {
      _id: 'uuid',
      // onde será vinculado um historico a um usuario usando o id do user que esta autenticado
      user_id: {
        type: 'string',
        // o indexed serve para dizer que ele é um campo que sera usado como filtro de pesquisaf
        indexed: true,
      },
      license_plate: 'string',
      description: 'string',
      status: 'string',
      created_at: 'date',
      updated_at: 'date',
    },
  }
}
