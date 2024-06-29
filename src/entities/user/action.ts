'use server'

import { ActionBuilder } from '@/admin-builder/action'
import { dbClient } from '@/shared/db-client'
import { entityConfig } from '@/entities/user/config'

export const userAction = ActionBuilder.init({
  dbClient,
  config: entityConfig,
})
