import { ConfigContainer, DbClientContainer } from '@/admin-builder/_container'
import { drizzle } from 'drizzle-orm/postgres-js'
import { EntitySchemaProvider } from '@/admin-builder/_entity-schema'
import { mergeContainers } from 'tiny-invert'

export const DbProvider = mergeContainers([
  DbClientContainer,
  ConfigContainer,
]).provider(
  (ctx) => {
    return drizzle(ctx.deps.dbClient, {
      schema: {
        entitySchema: ctx.innerDeps.entitySchema,
      },
    })
  },
  {
    entitySchema: EntitySchemaProvider,
  }
)
