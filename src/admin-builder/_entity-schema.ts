import { ConfigContainer } from '@/admin-builder/_container'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const EntitySchemaProvider = ConfigContainer.provider((ctx) => {
  const fields = Object.fromEntries(
    ctx.deps.config.fields.map((field) => [field.name, text(field.name)])
  )

  return pgTable(ctx.deps.config.name, {
    id: serial('id'),
    ...fields,
    createdAt: timestamp('created_at'),
    updatedAt: timestamp('updated_at'),
  })
})
