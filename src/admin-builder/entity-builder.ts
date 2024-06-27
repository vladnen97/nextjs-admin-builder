import { EntityPageProvider } from '@/admin-builder/_entity-page'
import { createModule } from 'tiny-invert'
import { AdminEntityBuilderContainer } from '@/admin-builder/_container'

export type { AdminEntityConfig, AdminBuildField } from './_types'

const EntryProvider = AdminEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    EntityPage: EntityPageProvider,
  }
)

export const EntityBuilder = createModule(EntryProvider)
