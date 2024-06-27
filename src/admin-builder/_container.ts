import { createContainer } from 'tiny-invert'
import { AdminEntityConfig } from '@/admin-builder/_types'

export const AdminEntityBuilderContainer = createContainer<{
  config: AdminEntityConfig
}>()
