import { AdminClientEntityBuilderContainer } from '@/admin-builder/_container'
import { EntityCardProvider } from '@/admin-builder/_entity-card'
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components'
import { UpsertEntityFormProvider } from '@/admin-builder/_upsert-entity-form'
import { useEffect, useState, useTransition } from 'react'
import { GetEntityResult } from '@/admin-builder/_types'

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
  ({
    deps: { config, action },
    innerDeps: { EntityCard, UpsertEntityForm },
  }) => {
    return function EntityPage() {
      const [entities, setEntities] = useState<GetEntityResult[]>([])
      const [isLoading, startTransition] = useTransition()

      const fetch = () => {
        startTransition(async () => {
          await action({ type: 'get' }).then((res) => {
            if (res) setEntities(res)
          })
        })
      }

      useEffect(() => {
        fetch()
      }, [])

      return (
        <div className={'p-12 max-w-[1200px] mx-auto'}>
          <h1 className={'text-5xl font-bold mb-8'}>{config.title}</h1>

          <div className={'mb-8 flex gap-3'}>
            <Dialog>
              <DialogTrigger asChild>
                <Button>create</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create {config.title}</DialogTitle>
                </DialogHeader>
                <UpsertEntityForm onSuccess={() => fetch()} />
              </DialogContent>
            </Dialog>
          </div>
          <div className={'grid grid-cols-3 gap-5'}>
            {entities.toReversed().map((entity) => (
              <EntityCard
                key={entity.id}
                entity={entity}
                onDelete={() => fetch()}
              />
            ))}
          </div>
        </div>
      )
    }
  },
  {
    EntityCard: EntityCardProvider,
    UpsertEntityForm: UpsertEntityFormProvider,
  }
)
