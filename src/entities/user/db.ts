import { entityConfig } from '@/entities/user/config'
import { EntitySchemaBuilder } from '@/admin-builder/entity-schema-builder'

export const UserSchemaEntity = EntitySchemaBuilder.init({
  config: entityConfig,
})
