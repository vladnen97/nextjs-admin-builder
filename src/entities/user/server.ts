import { ServerBuilder } from '@/admin-builder/server-builder'
import { entityConfig } from '@/entities/user/config'
import { dbClient } from '@/shared/db-client'

export const UserEntity = ServerBuilder.init({
  config: entityConfig,
  dbClient,
})
