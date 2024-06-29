import { number, string } from 'prop-types'

type Options = {
  label: string
  value: string
}

type SelectField = {
  name: string
  title: string
  type: 'select'
  options: Options[]
}

type TextField = {
  name: string
  title: string
  type: 'text'
}

export type GetEntitiesParams = {
  type: 'get'
}
export type CreateEntityParams = {
  type: 'create'
  data: {
    [key: string]: string | number | boolean
  }
}

export type UpdateEntityParams = {
  type: 'update'
  id: number
  data: {
    [key: string]: string | number | boolean
  }
}

export type DeleteEntityParams = {
  type: 'delete'
  id: number
}

export type GetEntityResult = {
  id: number
  [key: string]: string | number | boolean | null | Date
}

export type ActionParams =
  | GetEntitiesParams
  | CreateEntityParams
  | UpdateEntityParams
  | DeleteEntityParams

export type AdminBuilderAction = (
  params: ActionParams
) => Promise<GetEntityResult[] | null>

export type AdminBuilderField = TextField | SelectField

export type AdminEntityConfig = {
  name: string
  title: string
  fields: AdminBuilderField[]
}
