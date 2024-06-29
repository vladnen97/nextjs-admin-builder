import { AdminActionEntityBuilderContainer } from '@/admin-builder/_container'
import {
  ActionParams,
  AdminBuilderAction,
  GetEntityResult,
} from '@/admin-builder/_types'
import { DbProvider } from '@/admin-builder/_db'
import { EntitySchemaProvider } from '@/admin-builder/_entity-schema'
import { eq } from 'drizzle-orm'

export const ActionProvider = AdminActionEntityBuilderContainer.provider(
  ({ innerDeps: { db, entitySchema } }): AdminBuilderAction =>
    async (params: ActionParams): Promise<GetEntityResult[] | null> => {
      if (params.type === 'get') {
        return await db.query.entitySchema.findMany()
      }

      if (params.type === 'create') {
        await db.insert(entitySchema).values({ ...params.data })

        return null
      }

      if (params.type === 'update') {
        await db
          .update(entitySchema)
          .set({ ...params.data })
          .where(eq(entitySchema.id, params.id))

        return null
      }

      if (params.type === 'delete') {
        await db.delete(entitySchema).where(eq(entitySchema.id, params.id))

        return null
      }

      return null
    },
  {
    db: DbProvider,
    entitySchema: EntitySchemaProvider,
  }
)
