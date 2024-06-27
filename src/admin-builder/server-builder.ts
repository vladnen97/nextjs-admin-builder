import { EntityPageProvider } from '@/admin-builder/_entity-page'
import { createModule } from 'tiny-invert'
import { AdminServerEntityBuilderContainer } from '@/admin-builder/_container'

export type { AdminEntityConfig, AdminBuildField } from './_types'

const EntryProvider = AdminServerEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    EntityPage: EntityPageProvider,
  }
)

export const ServerBuilder = createModule(EntryProvider)
