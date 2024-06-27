import { AdminEntityBuilderContainer } from '@/admin-builder/_container'
import { DbProvider } from '@/admin-builder/_db'

export const EntityPageProvider = AdminEntityBuilderContainer.provider(
  (ctx) => {
    return async function EntityPage() {
      const db = ctx.innerDeps.db

      const result = await db.query.entitySchema.findMany()

      console.log(result)

      return (
        <div>
          <h1>{ctx.deps.config.title}</h1>

          <div>
            {ctx.deps.config.fields.map((field) => (
              <div key={field.name}>
                {field.type}: {field.name}
              </div>
            ))}
          </div>
        </div>
      )
    }
  },
  {
    db: DbProvider,
  }
)
