import { EntityBuilder } from '@/admin-builder/entity-builder'
import { entityConfig } from '@/entities/user/config'

export const UserEntity = EntityBuilder.init({
  config: entityConfig,
})
