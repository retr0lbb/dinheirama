'use client'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { TbMoneybag } from 'react-icons/tb'
import { generateRandomId } from '@/utils/generateRandomId'

import Tasks from '@/components/task-holder'

export default function MissionPages() {
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <header className="w-full flex items-center justify-center text-center gap-2 text-snow-400 flex-col py-5">
        <h1 className="text-4xl md:text-6xl font-bold">Missões</h1>
        <p className="text-snow-600 md:text-xl">
          Cumpra as missões semanais para ganhar experiencia e de quebra ainda
          te ajuda a economizar uns trocados
        </p>
      </header>

      <main className="flex flex-col md:flex-row flex-1 items-center md:justify-center overflow-scroll md:overflow-hidden gap-4">
        <Tasks title="Renda Extra" Icon={GiReceiveMoney}>
          <Tasks.Task
            title="Venda de itens não ultilzados"
            description="Venda alguns items não ultilizados em lojas online ou venda de garagem"
            frequency={3}
            numberOfCompletions={2}
            key={generateRandomId()}
          />

          <Tasks.Task
            title="Carona remunerada"
            description="Ofereça serviços de transporte usando o seu carro"
            frequency={7}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            title="Participação em Pesquisas Online"
            description="Inscreva-se em 3 sites de pesquisa de mercado e participe de 5 pesquisas nesta semana."
            frequency={3}
            numberOfCompletions={1}
            key={generateRandomId()}
          />
        </Tasks>

        <Tasks title="Poupança" Icon={TbMoneybag}>
          <Tasks.Task
            title="Corte de Gastos com Transporte"
            description="Caminhe ou utilize transporte público pelo menos 3 vezes nesta semana, economizando assim no transporte."
            frequency={3}
            numberOfCompletions={3}
            key={generateRandomId()}
          />
          <Tasks.Task
            title="Desafio da Refeição Caseira"
            description="Prepare todas as refeições em casa durante a semana, evitando comer fora ou pedir delivery."
            frequency={7}
            numberOfCompletions={3}
            key={generateRandomId()}
          />
        </Tasks>

        <Tasks title="Investimento Pessoal" Icon={FaMoneyBillTrendUp}>
          <Tasks.Task
            title="Curso Online Gratuito"
            description="Pesquise e inscreva-se em um curso online gratuito que possa agregar valor ao seu trabalho ou interesses."
            frequency={1}
            numberOfCompletions={1}
            key={generateRandomId()}
            isComplete
          />

          <Tasks.Task
            title="Leitura de Livro Financeiro"
            description="Leia um livro sobre finanças pessoais ou investimentos. Tome notas sobre o que aprendeu e como pode aplicar."
            frequency={1}
            numberOfCompletions={1}
            key={generateRandomId()}
            isComplete
          />

          <Tasks.Task
            title="Plante uma Semente de Economia"
            description="Estabeleça um objetivo de economia mensal e comece a poupar R$ 50,00 esta semana, colocando em uma conta separada."
            frequency={7}
            numberOfCompletions={7}
            key={generateRandomId()}
            isComplete
          />
        </Tasks>
      </main>
    </section>
  )
}
