import { createModule } from 'tiny-invert'
import { AdminServerEntityBuilderContainer } from '@/admin-builder/_container'

export type { AdminEntityConfig, AdminBuildField } from './_types'

const EntryProvider = AdminServerEntityBuilderContainer.provider((ctx) => ({}))

export const ServerBuilder = createModule(EntryProvider)
