import Link from 'next/link'
import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const IaPreferencesSchema = z.object({})

export interface IaPreferencesRegisterForm
  extends z.infer<typeof IaPreferencesSchema> {}
interface PersonalInfoFormProps {
  handleSubmitForm: (data: IaPreferencesRegisterForm) => void
}

export function PersonalInfoForm({ handleSubmitForm }: PersonalInfoFormProps) {
  const { register, formState, handleSubmit, reset } =
    useForm<IaPreferencesRegisterForm>({
      resolver: zodResolver(IaPreferencesSchema),
    })

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="px-12 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <Input Title="Nome Completo">
          <Input.Field
            type="text"
            id="name"
            placeholder="Fulano da silva"
            {...register('name')}
          />
          {formState.errors.name && (
            <p className="text-sm text-danger_red">
              {formState.errors.name.message}
            </p>
          )}
        </Input>
      </div>

      <div className="grid place-items-center px-4 gap-4">
        <Button type="submit" sizes="md" className="">
          Registar
        </Button>
      </div>
    </form>
  )
}
