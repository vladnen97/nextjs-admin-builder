import { AdminEntityBuilderContainer } from '@/admin-builder/_container'
import { pgTable, serial, timestamp } from 'drizzle-orm/pg-core'

export const EntitySchemaProvider = AdminEntityBuilderContainer.provider(
  (ctx) => {
    const fields = Object.fromEntries(
      ctx.deps.config.fields.map((field) => [field.name, field.name])
    )

    const entitySchema = pgTable(ctx.deps.config.name, {
      id: serial('id'),
      ...fields,
      createdAt: timestamp('created_at'),
      updatedAt: timestamp('updated_at'),
    })

    return entitySchema
  }
)
