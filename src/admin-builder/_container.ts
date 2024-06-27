import { createContainer } from 'tiny-invert'
import { AdminEntityConfig } from '@/admin-builder/_types'
import { Sql } from 'postgres'

export const AdminEntityBuilderContainer = createContainer<{
  config: AdminEntityConfig
  dbClient: Sql
}>()
