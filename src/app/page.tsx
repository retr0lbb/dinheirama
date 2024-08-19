import { Button } from "@/components/button";
import { FreeFallingBanknotes } from "@/components/money-falling";
import { useState } from "react";

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col justify-center bg-neutral-950">
      <FreeFallingBanknotes isPlaying={true} />
      <div className="flex flex-col items-center justify-center space-y-8 z-10">
        <h1 className="text-9xl font-bold text-neutral-300">Dinheirama</h1>
      </div>
    </main>
  );
}
