import Link from 'next/link'
import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerLogin = z
  .object({
    name: z.string().min(4, 'Nome deve conter no mínimo 4 caracteres.'),
    email: z.string().email('Campo deve ser um email válido.'),
    phone: z
      .string()
      .regex(
        /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
        'Número de telefone inválido. Deve estar no formato (XX) XXXXX-XXXX ou similar.'
      ),
    password: z
      .string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres.')
      .max(64, 'A senha deve conter no máximo 64 caracteres.'),
    confirmPassword: z
      .string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres.')
      .max(64, 'A senha deve conter no máximo 64 caracteres.'),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas devem ser iguais.',
  })

export interface RegisterLoginForm extends z.infer<typeof registerLogin> {}
interface PersonalInfoFormProps {
  handleSubmitForm: (data: RegisterLoginForm) => void
}

export function PersonalInfoForm({ handleSubmitForm }: PersonalInfoFormProps) {
  const { register, formState, handleSubmit, reset } =
    useForm<RegisterLoginForm>({
      resolver: zodResolver(registerLogin),
    })
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="px-12 flex flex-col gap-4 overflow-x-auto flex-1 w-full max-h-[500px]"
    >
      <div className="flex flex-col gap-2 w-full">
        <Input Title="Nome Completo" id="name" className="w-full">
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

        <Input Title="Numero de contato" id="tel">
          <Input.Field
            type="number"
            id="tel"
            placeholder="(01) 12345-6789"
            {...register('phone', {
              pattern: {
                value: /^\+55\s?\(?\d{2}\)?\s?\d{5}-?\d{4}$/,
                message: 'Invalid phone format',
              },
            })}
          />
          {formState.errors.phone && (
            <p className="text-sm text-danger_red">
              {formState.errors.phone.message}
            </p>
          )}
        </Input>

        <Input Title="Email" id="email">
          <Input.Field
            type="email"
            id="email"
            placeholder="example@mail.com"
            {...register('email')}
          />
          {formState.errors.email && (
            <p className="text-sm text-danger_red">
              {formState.errors.email.message}
            </p>
          )}
        </Input>

        <Input Title="Senha" id="password">
          <Input.Field
            type="password"
            id="password"
            placeholder="Sua senha"
            {...register('password')}
          />
          {formState.errors.password && (
            <p className="text-sm text-danger_red">
              {formState.errors.password.message}
            </p>
          )}
        </Input>

        <Input Title="Confirmar senha" id="cpass">
          <Input.Field
            type="password"
            id="cpass"
            placeholder="Confirme sua senha"
            {...register('confirmPassword')}
          />
          {formState.errors.confirmPassword && (
            <p className="text-sm text-danger_red">
              {formState.errors.confirmPassword.message}
            </p>
          )}
        </Input>
      </div>

      <div className="grid place-items-center px-4 gap-4">
        <Button type="submit" sizes="md" className="">
          Registar
        </Button>
        <span className="text-snow-600 text-lg w-full px-5 text-center">
          Já tem uma conta?{' '}
          <Link
            className="underline text-apple_green hover:text-apple_green/80 transition-all"
            href={'/login'}
          >
            Login
          </Link>
        </span>
      </div>
    </form>
  )
}
