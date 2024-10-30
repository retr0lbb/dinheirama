import Link from 'next/link'
import { Button } from '../button'
import { Input } from '../input'
import { useForm, Controller } from 'react-hook-form'
import { RadioButton } from '../radio-button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const IaPreferencesSchema = z.object({
  economyArea: z.string(),
  mainIncome: z.string(),
  mostExpenses: z.string(),
  allExpenses: z.string(),
  personalObjective: z.string(),
  hobbieTime: z.string(),
  from0to5: z.coerce.number().min(0).max(5),
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
      className="px-12 flex flex-col gap-4 overflow-x-auto max-h-[500px]"
    >
      <div className="flex flex-col gap-2">
        <Input Title="Em qual area você deseja economizar mais?">
          <Input.Field
            type="text"
            id="economyArea"
            placeholder="..."
            {...register('economyArea')}
          />
          {formState.errors.economyArea && (
            <p className="text-sm text-danger_red">
              {formState.errors.economyArea.message}
            </p>
          )}
        </Input>
        <Input Title="Descreva sua principal fonte de renda">
          <Input.Field
            type="text"
            id="mainIncome"
            placeholder="..."
            {...register('mainIncome')}
          />
          {formState.errors.mainIncome && (
            <p className="text-sm text-danger_red">
              {formState.errors.mainIncome.message}
            </p>
          )}
        </Input>
        <Input Title="Descreva o que você acha ser o seu maior gasto">
          <Input.Field
            type="text"
            id="mostExpenses"
            placeholder="..."
            {...register('mostExpenses')}
          />
          {formState.errors.mostExpenses && (
            <p className="text-sm text-danger_red">
              {formState.errors.mostExpenses.message}
            </p>
          )}
        </Input>
        <Input Title="descreva todos os seus gastos mensais">
          <Input.Field
            type="text"
            id="allExpenses"
            placeholder="..."
            {...register('allExpenses')}
          />
          {formState.errors.allExpenses && (
            <p className="text-sm text-danger_red">
              {formState.errors.allExpenses.message}
            </p>
          )}
        </Input>
        <Input Title="Objetivo pessoal">
          <Input.Field
            type="text"
            id="personalObjective"
            placeholder="..."
            {...register('personalObjective')}
          />
          {formState.errors.personalObjective && (
            <p className="text-sm text-danger_red">
              {formState.errors.personalObjective.message}
            </p>
          )}
        </Input>
        <Input Title="Quantas horas do seu dia você tem livre para seus hobbies?">
          <Input.Field
            type="text"
            id="hobbieTime"
            placeholder="..."
            {...register('hobbieTime')}
          />
          {formState.errors.hobbieTime && (
            <p className="text-sm text-danger_red">
              {formState.errors.hobbieTime.message}
            </p>
          )}
        </Input>

        <Input
          border="none"
          Title="De 0 a 5 o quanto flexível você pode ser com os gastos"
        >
          <Input.Field
            type="number"
            id=""
            placeholder="0"
            {...register('from0to5')}
          />
          {formState.errors.from0to5 && (
            <p className="text-sm text-danger_red">
              {formState.errors.from0to5.message}
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
