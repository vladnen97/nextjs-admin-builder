import { ClientBuilder } from '@/admin-builder/client'
import { entityConfig } from '@/entities/user/config'
import { userAction } from '@/entities/user/action'

export const userClient = ClientBuilder.init({
  config: entityConfig,
  action: userAction,
})
