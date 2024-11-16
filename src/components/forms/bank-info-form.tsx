import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const BankRegister = z.object({
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato de CPF inválido'),
  bankAccountNumber: z
    .string()
    .min(6, 'Número da conta deve ter no mínimo 6 dígitos'),
  bank: z.string().min(3, 'O nome do banco deve ter no mínimo 3 caracteres'),
  agencyNumber: z
    .string()
    .min(4, 'Número da agência deve ter no mínimo 4 caracteres'),
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
        </Input>
        {formState.errors.cpf && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.cpf.message}
          </p>
        )}

        <Input Title="Entidade Bancaria" id="bank">
          <Input.Field
            type="text"
            id="bank"
            placeholder="Banco do Brasil"
            {...register('bank')}
          />
        </Input>
        {formState.errors.bank && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.bank.message}
          </p>
        )}

        <Input Title="Numero da conta" id="accountNumber">
          <Input.Field
            type="text"
            id="accountNumber"
            placeholder="00000-0"
            {...register('bankAccountNumber')}
          />
        </Input>
        {formState.errors.bankAccountNumber && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.bankAccountNumber.message}
          </p>
        )}

        <Input Title="Numero da agencia" id="agencyNumber">
          <Input.Field
            type="text"
            id="agencyNumber"
            placeholder="00000-000"
            {...register('agencyNumber')}
          />
        </Input>
        {formState.errors.agencyNumber && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.agencyNumber.message}
          </p>
        )}
      </div>

      <div className="grid place-items-center px-4 gap-4">
        <Button type="submit" sizes="md">
          Registar
        </Button>
      </div>
    </form>
  )
}
