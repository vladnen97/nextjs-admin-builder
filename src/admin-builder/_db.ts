import { AdminEntityBuilderContainer } from '@/admin-builder/_container'
import { drizzle } from 'drizzle-orm/postgres-js'
import { EntitySchemaProvider } from '@/admin-builder/_entity-schema'

export const DbProvider = AdminEntityBuilderContainer.provider(
  (ctx) => {
    const db = drizzle(ctx.deps.dbClient, {
      schema: {
        entitySchema: ctx.innerDeps.entitySchema,
      },
    })

    return db
  },
  {
    entitySchema: EntitySchemaProvider,
  }
)
