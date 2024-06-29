import { AdminClientEntityBuilderContainer } from '@/admin-builder/_container'
import { useForm } from 'react-hook-form'

import {
  Select,
  Button,
  Input,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components'
import { GetEntityResult } from '@/admin-builder/_types'
import { useTransition } from 'react'

export const UpsertEntityFormProvider =
  AdminClientEntityBuilderContainer.provider(({ deps: { action, config } }) => {
    return function UpsertEntityForm({
      defaultValues,
      onSuccess,
    }: {
      defaultValues?: GetEntityResult
      onSuccess?: () => void
    }) {
      const [isLoading, startTransition] = useTransition()
      const id = defaultValues?.id
      const form = useForm({
        defaultValues: {
          ...defaultValues,
        },
      })

      const handleSubmit = form.handleSubmit((data) => {
        startTransition(async () => {
          if (id) {
            await action({ id, data, type: 'update' })
          } else {
            await action({ data, type: 'create' })
          }

          onSuccess?.()
        })
      })

      return (
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {config.fields.map((fieldConfig) => (
              <FormField
                key={fieldConfig.name}
                control={form.control}
                name={fieldConfig.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fieldConfig.title}</FormLabel>
                    <FormControl>
                      {fieldConfig.type === 'select' && (
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="..." />
                          </SelectTrigger>
                          <SelectContent>
                            {fieldConfig.options.map((option) => (
                              <SelectItem
                                value={option.value}
                                key={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      {fieldConfig.type === 'text' && (
                        <Input placeholder="..." {...field} />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      )
    }
  })
