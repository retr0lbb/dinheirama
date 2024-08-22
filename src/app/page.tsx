import { Button } from "@/components/button";
import { LinkComponent } from "@/components/link";
import { FreeFallingBanknotes } from "@/components/money-falling";

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col justify-center space-y-10 antialiased">
      <FreeFallingBanknotes isPlaying={true} />
      <div className="flex flex-col items-center justify-center space-y-2 z-10">
        <h1 className="text-8xl font-bold text-snow-200 text-center">
          Dinheirama
        </h1>
        <p className="text-zinc-600 text-xl max-w-96 text-center">Chega de perder dinheiro com jogos de aposta baratos, mude de vida agora mesmo.</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-4">
        <Button sizes="md">Acessar</Button>
        <p className="text-snow-400">não tem conta? <LinkComponent href={"/login"}>cadastre-se</LinkComponent></p>
      </div>
    </main>
  );
}
