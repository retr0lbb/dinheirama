import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const BankRegister = z.object({
  cpf: z.string(),
  bankAccountNumber: z.string(),
  bank: z.string(),
  agencyNumber: z.string(),
})

export interface BankRegister extends z.infer<typeof BankRegister> {}
interface PersonalInfoFormProps {
  handleSubmitForm: (data: BankRegister) => void
}

export function BankInfoForm({ handleSubmitForm }: PersonalInfoFormProps) {
  const { register, formState, handleSubmit, reset } = useForm<BankRegister>({
    resolver: zodResolver(BankRegister),
  })
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="px-12 flex flex-col gap-4 overflow-x-auto flex-1 w-full max-h-[500px]"
    >
      <div className="flex flex-col gap-2">
        <Input Title="CPF" id="cpf">
          <Input.Field
            type="text"
            id="cpf"
            placeholder="000000000-00"
            {...register('cpf')}
          />
          {formState.errors.cpf && (
            <p className="text-sm text-danger_red">
              {formState.errors.cpf.message}
            </p>
          )}
        </Input>

        <Input Title="Entidade Bancaria" id="bank">
          <Input.Field
            type="text"
            id="bank"
            placeholder="Banco do Brasil"
            {...register('bank')}
          />
          {formState.errors.bank && (
            <p className="text-sm text-danger_red">
              {formState.errors.bank.message}
            </p>
          )}
        </Input>

        <Input Title="Numero da conta" id="accountNumber">
          <Input.Field
            type="text"
            id="accountNumber"
            placeholder="00000-0"
            {...register('bankAccountNumber')}
          />
          {formState.errors.bankAccountNumber && (
            <p className="text-sm text-danger_red">
              {formState.errors.bankAccountNumber.message}
            </p>
          )}
        </Input>

        <Input Title="Numero da agencia" id="agencyNumber">
          <Input.Field
            type="text"
            id="agencyNumber"
            placeholder="00000-000"
            {...register('agencyNumber')}
          />
          {formState.errors.agencyNumber && (
            <p className="text-sm text-danger_red">
              {formState.errors.agencyNumber.message}
            </p>
          )}
        </Input>
      </div>

      <div className="grid place-items-center px-4 gap-4">
        <Button type="submit" sizes="md">
          Registar
        </Button>
      </div>
    </form>
  )
}
