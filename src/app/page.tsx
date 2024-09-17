import { Button } from '@/components/button'
import { FreeFallingBanknotes } from '@/components/money-falling'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col justify-center space-y-10 antialiased">
      <FreeFallingBanknotes isPlaying={true} />
      <div className="flex flex-col items-center justify-center space-y-2 z-10">
        <h1 className="text-8xl font-bold text-snow-200 text-center">
          Dinheirama
        </h1>
        <p className="text-zinc-600 text-xl max-w-96 text-center">
          Chega de perder dinheiro com jogos de aposta baratos, mude de vida
          agora mesmo.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-4">
        <Link href={'/login'}>
          <Button sizes="lg" className="px-12">
            Acessar
          </Button>
        </Link>
      </div>
    </main>
  )
}
