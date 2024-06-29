import { createModule } from 'tiny-invert'
import { AdminClientEntityBuilderContainer } from '@/admin-builder/_container'
import { EntityPageProvider } from '@/admin-builder/_entity-page'

const EntryProvider = AdminClientEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    EntityPage: EntityPageProvider,
  }
)

export const ClientBuilder = createModule(EntryProvider)
