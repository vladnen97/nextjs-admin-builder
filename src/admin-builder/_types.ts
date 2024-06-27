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

export type AdminBuildField = TextField | SelectField

export type AdminEntityConfig = {
  name: string
  title: string
  fields: AdminBuildField[]
}
