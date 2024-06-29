import { AdminClientEntityBuilderContainer } from '@/admin-builder/_container'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GetEntityResult } from '@/admin-builder/_types'
import { Button } from '@/components'
import { useTransition } from 'react'

export const EntityCardProvider = AdminClientEntityBuilderContainer.provider(
  ({ deps: { config, action } }) => {
    return function EntityCard({
      entity,
      onDelete,
    }: {
      key?: number
      entity: GetEntityResult
      onDelete?: () => void
    }) {
      const [isLoading, startTransition] = useTransition()

      const handleDelete = () => {
        startTransition(async () => {
          await action({ type: 'delete', id: entity.id })

          onDelete?.()
        })
      }

      return (
        <Card>
          <CardHeader>
            <CardTitle>{entity.id}</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(entity).map(([key, value]) => {
              if (!config.fields.find((field) => field.name === key)) {
                return null
              }

              return (
                <div key={key}>
                  {key}: {String(value)}
                </div>
              )
            })}
          </CardContent>
          <CardFooter className={'justify-end p-2 mt-2 gap-3'}>
            <Button variant={'outline'} disabled={isLoading}>
              Edit
            </Button>
            <Button
              variant={'destructive'}
              onClick={handleDelete}
              disabled={isLoading}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      )
    }
  }
)
