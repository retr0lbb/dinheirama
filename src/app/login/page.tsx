import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { FaGoogle, FaApple } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { Spinner } from '@/components/spinner'

export default function Login() {
  return (
    <main className="h-screen bg-black flex items-center justify-center antialiased">
      <div className="space-y-8">
        <header className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-5xl text-snow-400 font-bold">
            Bem-vindo de volta!
          </h1>
          <p className="text-xl text-snow-600">
            É sempre um prazer ter você de volta
          </p>
        </header>

        <div className="space-y-5">
          <form className="px-4 space-y-5">
            <div className="space-y-4">
              <Input
                hasError={{ message: 'email should countain @' }}
                Title="Email"
              >
                <Input.Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                />
              </Input>

              <Input Title="Senha">
                <Input.Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Sua senha"
                />
              </Input>
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
              <Button type="submit" sizes="md">
                {/* <Spinner sizes="md" colour="green" /> : "Entrar" */}
                Entrar
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

          <div className="w-full flex items-center justify-center text-snow-600 text-xs px-6">
            <div className="bg-snow-600 w-full h-px rounded" />
            <p className="mx-5">OU</p>
            <div className="bg-snow-600 w-full h-px rounded" />
          </div>

          <div className="flex items-center justify-around gap-2 text-lg">
            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600"
            >
              <FaGoogle className="text-snow-400" /> Entre com o Google.
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600"
            >
              <FaXTwitter className="text-snow-400" /> Entre com Twitter.
            </Button>

            <Button
              variant="secondary"
              sizes="sm"
              className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600"
            >
              <FaApple className="text-snow-400" /> Entre com Apple.
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
