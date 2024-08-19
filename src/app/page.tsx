import { Button } from "@/components/button";
import { FreeFallingBanknotes } from "@/components/money-falling";
import { useState } from "react";

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col justify-center bg-neutral-950">
      <FreeFallingBanknotes isPlaying={true} />
      <div className="flex flex-col items-center justify-center space-y-8 z-10">
        <h1 className="text-8xl font-bold text-neutral-300 text-center">
          <strong className="text-green-600 font-bold text-9xl">金</strong><br></br>Dinheirama
        </h1>

        <p className="text-neutral-500 text-xl max-w-96 text-center">Chega de perder dinheiro com jogos de aposta baratos, mude de vida agora mesmo.</p>
      </div>

      <div className="flex flex-col">
        <Button>
          Acesse a plataforma
        </Button>

        <span className="text-red-500">não tem conta? <a href="#">cadastre-se</a></span>
      </div>
    </main>
  );
}
