'use client'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { FaGoogle, FaApple } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { Spinner } from '@/components/spinner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import {
  LoginForm,
  type LoginFormInterface,
} from '@/components/forms/login-form'

const loginFormSchema = z.object({
  email: z.string().email('Campo deve ser um email valido'),
  password: z.string().min(8, 'sua senha deve ter no minimo 8 caracteres'),
})

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const { reset } = useForm()

  async function handleLoginUser(data: LoginFormInterface) {
    setIsLoading(true)

    setInterval(() => {
      try {
        console.log(data.email)
        console.log(data.password)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }

      reset()
    }, 10000)
  }

  return (
    <main className="h-screen bg-black flex items-center justify-center antialiased">
      <div className="flex flex-col gap-8">
        <header className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-3xl lg:text-5xl text-snow-400 font-bold">
            Bem-vindo de volta!
          </h1>
          <p className="text-md lg:text-xl text-snow-600">
            É sempre um prazer ter você de volta
          </p>
        </header>

        <div className="flex flex-col gap-5">
          <LoginForm handleSubmitForm={handleLoginUser} isLoading={isLoading} />

          <div className="w-full flex items-center justify-center text-snow-600 text-xs px-6">
            <div className="bg-snow-600 w-full h-px rounded" />
            <p className="mx-5">OU</p>
            <div className="bg-snow-600 w-full h-px rounded" />
          </div>

          <div className="flex items-center justify-around gap-2 text-lg">
            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-14 md:h-10 aspect-square md:aspect-auto text-2xl md:text-lg rounded-full md:rounded-lg flex-grow-0 flex-shrink-0 w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <FaGoogle className="text-snow-400" />
                <p className="hidden md:block text-snow-600">
                  Entre com o Google.
                </p>
              </div>
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-14 md:h-10 aspect-square md:aspect-auto text-2xl md:text-lg rounded-full md:rounded-lg flex-grow-0 flex-shrink-0 w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <FaXTwitter className="text-snow-400" />
                <p className="text-snow-600 hidden md:block">
                  Entre com Twitter.
                </p>
              </div>
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-14 md:h-10 aspect-square md:aspect-auto text-2xl md:text-lg rounded-full md:rounded-lg flex-grow-0 flex-shrink-0 w-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <FaApple className="text-snow-400" />
                <p className="text-snow-600 hidden md:block">
                  Entre com Apple.
                </p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
