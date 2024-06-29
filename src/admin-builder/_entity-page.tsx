import { AdminClientEntityBuilderContainer } from '@/admin-builder/_container'
import { Button } from '@/components/ui/button'

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
  ({ deps: { config, action } }) => {
    return function EntityPage() {
      return (
        <div className={'p-5'}>
          <h1>{config.title}</h1>

          <div className={'m-8 flex gap-2'}>
            <Button
              onClick={() => {
                void action()
              }}
            >
              call server action
            </Button>
          </div>
          <div>
            {config.fields.map((field) => (
              <div key={field.name}>
                {field.type}: {field.name}
              </div>
            ))}
          </div>
        </div>
      )
    }
  }
)
