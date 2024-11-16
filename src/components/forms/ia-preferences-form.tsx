import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const IaPreferencesSchema = z.object({
  economyArea: z.string().min(1, 'Este campo é obrigatório'),
  mainIncome: z.string().min(1, 'Este campo é obrigatório'),
  mostExpenses: z.string().min(1, 'Este campo é obrigatório'),
  allExpenses: z.string().min(1, 'Este campo é obrigatório'),
  personalObjective: z.string().min(1, 'Este campo é obrigatório'),
  hobbieTime: z.string().min(1, 'Este campo é obrigatório'),
  from0to5: z.coerce
    .number()
    .min(0, 'O valor deve ser no mínimo 0')
    .max(5, 'O valor deve ser no máximo 5'),
})
export interface IaPreferencesRegisterForm
  extends z.infer<typeof IaPreferencesSchema> {}
interface PersonalInfoFormProps {
  handleSubmitForm: (data: IaPreferencesRegisterForm) => void
}

export function IaPreferencesForm({ handleSubmitForm }: PersonalInfoFormProps) {
  const { register, formState, handleSubmit, control, reset } =
    useForm<IaPreferencesRegisterForm>({
      resolver: zodResolver(IaPreferencesSchema),
    })

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="px-12 flex flex-col gap-4 overflow-x-auto flex-1 w-full max-h-[500px]"
    >
      <div className="flex flex-col gap-2">
        <Input
          Title="Em qual area você deseja economizar mais?"
          id="economyArea"
        >
          <Input.Field
            type="text"
            id="economyArea"
            placeholder="..."
            {...register('economyArea')}
          />
        </Input>
        {formState.errors.economyArea && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.economyArea.message}
          </p>
        )}
        <Input Title="Descreva sua principal fonte de renda" id="mainIncome">
          <Input.Field
            type="text"
            id="mainIncome"
            placeholder="..."
            {...register('mainIncome')}
          />
        </Input>
        {formState.errors.mainIncome && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.mainIncome.message}
          </p>
        )}
        <Input
          Title="Descreva o que você acha ser o seu maior gasto"
          id="mostExpenses"
        >
          <Input.Field
            type="text"
            id="mostExpenses"
            placeholder="..."
            {...register('mostExpenses')}
          />
        </Input>
        {formState.errors.mostExpenses && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.mostExpenses.message}
          </p>
        )}
        <Input Title="descreva todos os seus gastos mensais" id="allExpenses">
          <Input.Field
            type="text"
            id="allExpenses"
            placeholder="..."
            {...register('allExpenses')}
          />
        </Input>
        {formState.errors.allExpenses && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.allExpenses.message}
          </p>
        )}
        <Input Title="Objetivo pessoal" id="personalObjective">
          <Input.Field
            type="text"
            id="personalObjective"
            placeholder="..."
            {...register('personalObjective')}
          />
        </Input>
        {formState.errors.personalObjective && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.personalObjective.message}
          </p>
        )}
        <Input
          Title="Quantas horas do seu dia você tem livre para seus hobbies?"
          id="hobbieTime"
        >
          <Input.Field
            type="text"
            id="hobbieTime"
            placeholder="..."
            {...register('hobbieTime')}
          />
        </Input>
        {formState.errors.hobbieTime && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.hobbieTime.message}
          </p>
        )}

        <Input
          border="none"
          Title="De 0 a 5 o quanto flexível você pode ser com os gastos"
          id="from0to5"
        >
          <Input.Field
            type="number"
            id="from0to5"
            placeholder="0"
            {...register('from0to5')}
          />
        </Input>
        {formState.errors.from0to5 && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.from0to5.message}
          </p>
        )}
      </div>

      <div className="grid place-items-center px-4 gap-4">
        <Button type="submit" sizes="md" className="">
          Registar
        </Button>
      </div>
    </form>
  )
}
