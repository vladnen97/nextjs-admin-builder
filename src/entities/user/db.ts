import { entityConfig } from '@/entities/user/config'
import { EntitySchemaBuilder } from '@/admin-builder/entity-schema-builder'
import { dbClient } from '@/shared/db-client'

export const UserSchemaEntity = EntitySchemaBuilder.init({
  config: entityConfig,
  dbClient,
})
