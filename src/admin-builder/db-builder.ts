import { createModule } from 'tiny-invert'
import { EntitySchemaProvider } from '@/admin-builder/_entity-schema'
import { AdminDbEntityBuilderContainer } from '@/admin-builder/_container'

const EntryProvider = AdminDbEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    schema: EntitySchemaProvider,
  }
)

export const DbBuilder = createModule(EntryProvider)
