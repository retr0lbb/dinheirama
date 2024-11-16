import Link from 'next/link'
import { Button } from '../button'
import { Input } from '../input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner } from '../spinner'

const loginFormSchema = z.object({
  email: z.string().email('Campo deve ser um email valido'),
  password: z.string().min(8, 'sua senha deve ter no minimo 8 caracteres'),
})

export interface LoginFormInterface extends z.infer<typeof loginFormSchema> {}
interface LoginFormProps {
  handleSubmitForm: (data: LoginFormInterface) => void
  isLoading: boolean
}

export function LoginForm({ handleSubmitForm, isLoading }: LoginFormProps) {
  const { register, formState, handleSubmit, reset } =
    useForm<LoginFormInterface>({
      resolver: zodResolver(loginFormSchema),
    })
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="px-4 flex flex-col gap-5"
    >
      <div className="space-y-4">
        <Input id="email" Title="Email">
          <Input.Field
            type="email"
            id="email"
            placeholder="example@mail.com"
            {...register('email')}
          />
        </Input>
        {formState.errors.email && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.email.message}
          </p>
        )}

        <Input id="password" Title="Senha">
          <Input.Field
            type="password"
            id="password"
            placeholder="Sua senha"
            {...register('password')}
          />
        </Input>
        {formState.errors.password && (
          <p className="text-sm text-danger_red mx-4">
            {formState.errors.password.message}
          </p>
        )}
        <p className="text-sm text-apple_green w-full text-right pr-4">
          <Link
            className="underline hover:text-apple_green/80 transition-all"
            href={'#'}
          >
            Esqueci minha senha.
          </Link>
        </p>
      </div>

      <div className="grid place-items-center gap-2 px-4">
        <Button type="submit" sizes="md" disabled={isLoading}>
          {isLoading ? <Spinner colour="green" /> : 'Entrar'}
        </Button>
        <span className="text-snow-600 mt-2">
          Não tem uma conta?{' '}
          <Link
            className="underline text-apple_green hover:text-apple_green/80 transition-all"
            href={'/register'}
          >
            Cadastre-se
          </Link>
        </span>
      </div>
    </form>
  )
}
