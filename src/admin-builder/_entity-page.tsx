import { AdminClientEntityBuilderContainer } from '@/admin-builder/_container'
import { Button } from '@/components/ui/button'
import { EntityCardProvider } from '@/admin-builder/_entity-card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { UpsertEntityFormProvider } from '@/admin-builder/_upsert-entity-form'

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
  ({ deps: { config }, innerDeps: { EntityCard, UpsertEntityForm } }) => {
    return function EntityPage() {
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
                <UpsertEntityForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className={'grid grid-cols-3'}>
            <EntityCard />
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
