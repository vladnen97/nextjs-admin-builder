type Options = {
  label: string
  value: string
}

type SelectField = {
  name: string
  title: string
  type: 'text'
  options: Options[]
}

type TextField = {
  name: string
  title: string
  type: 'text'
  inputType: string
}

export type AdminBuildField = TextField | SelectField

export type AdminEntityConfig = {
  name: string
  title: string
  fields: AdminBuildField[]
}
