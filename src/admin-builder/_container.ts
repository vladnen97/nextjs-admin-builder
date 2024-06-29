import { createContainer, mergeContainers } from 'tiny-invert'
import { AdminEntityConfig } from '@/admin-builder/_types'
import { Sql } from 'postgres'

export const DbClientContainer = createContainer<{
  dbClient: Sql
}>()

export const ConfigContainer = createContainer<{
  config: AdminEntityConfig
}>()

export const AdminDbEntityBuilderContainer = mergeContainers([
  DbClientContainer,
  ConfigContainer,
])

export const AdminServerEntityBuilderContainer = mergeContainers([
  DbClientContainer,
  ConfigContainer,
]).extend<{
  client: {
    CreateEntityFrom: () => Element
  }
}>('AdminServerEntityBuilderContainer')

export const AdminClientEntityBuilderContainer = mergeContainers([
  ConfigContainer,
]).extend<{
  action: () => Promise<unknown>
}>('AdminClientEntityBuilderContainer')

export const AdminActionEntityBuilderContainer = mergeContainers([
  DbClientContainer,
  ConfigContainer,
])
