'use client'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { FaApple, FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const registerLogin = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.coerce.number().positive().min(10),
  password: z.string().min(6).max(64),
  confirmPassword: z.string().min(6).max(64),
})

interface RegisterLoginForm extends z.infer<typeof registerLogin> {}

export default function Register() {
  const { register, formState, handleSubmit, reset } =
    useForm<RegisterLoginForm>({
      resolver: zodResolver(registerLogin),
    })

  async function handleRegisterSubmit(data: RegisterLoginForm) {
    console.log(data)
    reset()
  }

  return (
    <main className="h-screen bg-black flex items-center justify-center antialiased">
      <div className="space-y-8">
        <header className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-5xl text-snow-400 font-bold">
            Quer começar a economizar?
          </h1>
          <p className="text-xl text-snow-600">
            Crie sua conta hoje mesmo de forma gratuita
          </p>
        </header>

        <div className="flex flex-col gap-2">
          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
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
              </Input>

              <Input Title="Numero de contato">
                <Input.Field
                  type="number"
                  id="tel"
                  placeholder="(01) 12345-6789"
                  {...register('phone')}
                />
              </Input>

              <Input Title="Email">
                <Input.Field
                  type="email"
                  id="email"
                  placeholder="example@mail.com"
                  {...register('email')}
                />
              </Input>

              <Input Title="Senha">
                <Input.Field
                  type="password"
                  id="password"
                  placeholder="Sua senha"
                  {...register('password')}
                />
              </Input>

              <Input Title="Confirmar senha">
                <Input.Field
                  type="password"
                  id="cpass"
                  placeholder="Confirme sua senha"
                  {...register('confirmPassword')}
                />
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
          <div className="w-full flex items-center justify-center text-snow-600 text-xs px-14">
            <div className="bg-snow-600 w-full h-px rounded" />
            <p className="mx-5">OU</p>
            <div className="bg-snow-600 w-full h-px rounded" />
          </div>

          <div className="flex items-center px-8 justify-around gap-2 text-lg">
            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600"
            >
              <FaGoogle className="text-snow-400" /> Cadastre-se com o Google.
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600"
            >
              <FaXTwitter className="text-snow-400" /> Cadastre-se com Twitter.
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600"
            >
              <FaApple className="text-snow-400" /> Cadastre-se com Apple.
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
