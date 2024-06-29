import { entityConfig } from '@/entities/user/config'
import { DbBuilder } from '@/admin-builder/db'
import { dbClient } from '@/shared/db-client'

export const userDb = DbBuilder.init({
  config: entityConfig,
  dbClient,
})
