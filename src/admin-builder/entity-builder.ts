import { EntityPageProvider } from '@/admin-builder/_entity-page'
import { createModule } from 'tiny-invert'
import { AdminEntityBuilderContainer } from '@/admin-builder/_container'

const EntryProvider = AdminEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    EntityPage: EntityPageProvider,
  }
)

export const EntityBuilder = createModule(EntryProvider)
