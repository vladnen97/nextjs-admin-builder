import { entityConfig } from '@/entities/user/config'
import { DbBuilder } from '@/admin-builder/db-builder'
import { dbClient } from '@/shared/db-client'

export const userDb = DbBuilder.init({
  config: entityConfig,
  dbClient,
})
