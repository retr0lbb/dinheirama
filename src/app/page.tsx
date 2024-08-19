import { Button } from "@/components/button";
import { FreeFallingBanknotes } from "@/components/money-falling";

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col justify-center bg-zinc-950">
      <FreeFallingBanknotes isPlaying={true} />
      <div className="flex flex-col items-center justify-center space-y-2 z-10">
        <h1 className="text-8xl font-bold text-snow text-center">
          Dinheirama
        </h1>
        <p className="text-zinc-600 text-xl max-w-96 text-center">Chega de perder dinheiro com jogos de aposta baratos, mude de vida agora mesmo.</p>
      </div>
    </main>
  );
}
