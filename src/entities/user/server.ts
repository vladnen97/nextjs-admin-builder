import { ServerBuilder } from '@/admin-builder/server'
import { entityConfig } from '@/entities/user/config'
import { dbClient } from '@/shared/db-client'
import { userClient } from '@/entities/user/client'

export const UserEntityServer = ServerBuilder.init({
  config: entityConfig,
  dbClient,
  client: userClient,
})
