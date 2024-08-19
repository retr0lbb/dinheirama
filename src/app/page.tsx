import { Button } from "@/components/button";
import { FreeFallingBanknotes } from "@/components/money-falling";

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col justify-center bg-neutral-950">
      <FreeFallingBanknotes />
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-9xl font-bold text-neutral-300">Dinheirama</h1>
        <h1 className="text-9xl">🎰</h1>
        <p className="max-w-96 text-neutral-600 text-center">
          Chega de jogo do 🐯, chega de apostar em jogos esportivos, 
          mude de vida agora.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Button>Ficar rico.</Button>
        <Button>ja tenho cadastro</Button>
      </div>

    </main>
  );
}
