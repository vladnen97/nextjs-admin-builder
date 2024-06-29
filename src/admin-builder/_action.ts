import { AdminActionEntityBuilderContainer } from '@/admin-builder/_container'

export const ActionProvider = AdminActionEntityBuilderContainer.provider(
  (ctx) => async () => {
    console.log('server component', ctx.deps.config)
  }
)
