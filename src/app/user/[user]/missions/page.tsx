import { GiReceiveMoney } from 'react-icons/gi'
import { FaBusAlt } from 'react-icons/fa'
import { IoFastFood } from 'react-icons/io5'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { TbMoneybag } from 'react-icons/tb'
import { CiGlobe } from 'react-icons/ci'
import { FaUber } from 'react-icons/fa'
import { RiBillFill } from 'react-icons/ri'
import { MdOutlinePersonalVideo } from 'react-icons/md'
import { MdLocalCarWash } from 'react-icons/md'
import { FaBook } from 'react-icons/fa6'
import { GiGrowth } from 'react-icons/gi'
import { GiBarbecue } from 'react-icons/gi'
import { RiNetflixFill } from 'react-icons/ri'
import { FaHouseChimney } from 'react-icons/fa6'
import { BiSolidJoystick } from 'react-icons/bi'
import { SiCoursera } from 'react-icons/si'
import { generateRandomId } from '@/utils/generateRandomId'

import Tasks from '@/components/task-holder'

export default function MissionPages() {
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <header className="w-full flex items-center justify-center text-center text-snow-400 flex-col py-5">
        <h1 className="text-7xl font-bold">Missões</h1>
        <p className="text-snow-600">
          Cumpra as missões semanais para ganhar experiencia e de quebra ainda
          te ajuda a economizar uns trocados
        </p>
      </header>

      <main className="flex flex-1 items-center justify-center overflow-hidden gap-4">
        <Tasks title="Renda Extra" Icon={GiReceiveMoney}>
          <Tasks.Task
            Icon={MdOutlineLocalGroceryStore}
            title="Venda de itens não ultilzados"
            description="Venda alguns items não ultilizados em lojas online ou venda de garagem"
            frequency={3}
            numberOfCompletions={2}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={FaUber}
            title="Carona remunerada"
            description="Ofereça serviços de transporte usando o seu carro"
            frequency={7}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={CiGlobe}
            title="Participação em Pesquisas Online"
            description="Inscreva-se em 3 sites de pesquisa de mercado e participe de 5 pesquisas nesta semana."
            frequency={3}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={MdLocalCarWash}
            title="Ofereça Serviços de Lavagem de Carro"
            description="Ofereça serviços de lavagem de carro no seu bairro. Anuncie nas redes sociais para atrair clientes."
            frequency={7}
            numberOfCompletions={7}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={CiGlobe}
            title="Loja drop shipping"
            description="crie uma loja de revenda online de drop shipping"
            frequency={1}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={GiBarbecue}
            title="Trabalhe como churrasqueiro"
            description="Trabalhe como churrasqueiro fazendo churrascos para conhecidos e cobre um valor por isso por 1 final de semana"
            frequency={2}
            numberOfCompletions={1}
            key={generateRandomId()}
          />
        </Tasks>

        <Tasks title="Poupança" Icon={TbMoneybag}>
          <Tasks.Task
            Icon={FaBusAlt}
            title="Corte de Gastos com Transporte"
            description="Caminhe ou utilize transporte público pelo menos 3 vezes nesta semana, economizando assim no transporte."
            frequency={3}
            numberOfCompletions={3}
            key={generateRandomId()}
          />
          <Tasks.Task
            Icon={IoFastFood}
            title="Desafio da Refeição Caseira"
            description="Prepare todas as refeições em casa durante a semana, evitando comer fora ou pedir delivery."
            frequency={7}
            numberOfCompletions={3}
            key={generateRandomId()}
          />
          <Tasks.Task
            Icon={RiBillFill}
            title="Ajuste de Contas"
            description="Revise suas contas de energia e água e identifique 3 maneiras de economizar. Aplique essas mudanças."
            frequency={7}
            numberOfCompletions={3}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={RiNetflixFill}
            title="Corte de streaming"
            description="identifique os programas de streaming que você paga e corte 1 deles que você não usa."
            frequency={1}
            numberOfCompletions={0}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={BiSolidJoystick}
            title="Venda jogos velhos"
            description="Venda jogos de midia fisica para ganhar uma grana extra juntamente economizando espaço"
            frequency={2}
            numberOfCompletions={0}
            key={generateRandomId()}
          />
        </Tasks>

        <Tasks title="Investimento Pessoal" Icon={FaMoneyBillTrendUp}>
          <Tasks.Task
            Icon={MdOutlinePersonalVideo}
            title="Curso Online Gratuito"
            description="Pesquise e inscreva-se em um curso online gratuito que possa agregar valor ao seu trabalho ou interesses."
            frequency={1}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={FaBook}
            title="Leitura de Livro Financeiro"
            description="Leia um livro sobre finanças pessoais ou investimentos. Tome notas sobre o que aprendeu e como pode aplicar."
            frequency={1}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={GiGrowth}
            title="Plante uma Semente de Economia"
            description="Estabeleça um objetivo de economia mensal e comece a poupar R$ 50,00 esta semana, colocando em uma conta separada."
            frequency={7}
            numberOfCompletions={7}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={FaHouseChimney}
            title="Entre no mercado imobiliario"
            description="Compre algumas cotas de fundos imobiliarios seguros e deixe o dinheiro rendendo"
            frequency={3}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={SiCoursera}
            title="Aprenda mais sobre investimento"
            description="compre um curso de investimentos e aprenda mais sobre o seu perfil investidor, assista 10 min de aula por dia durante 1 semana"
            frequency={7}
            numberOfCompletions={4}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={FaBook}
            title="Leitura de Livro Financeiro"
            description="Leia um livro sobre finanças pessoais ou investimentos. Tome notas sobre o que aprendeu e como pode aplicar."
            frequency={1}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={GiGrowth}
            title="Plante uma Semente de Economia"
            description="Estabeleça um objetivo de economia mensal e comece a poupar R$ 50,00 esta semana, colocando em uma conta separada."
            frequency={7}
            numberOfCompletions={7}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={FaHouseChimney}
            title="Entre no mercado imobiliario"
            description="Compre algumas cotas de fundos imobiliarios seguros e deixe o dinheiro rendendo"
            frequency={3}
            numberOfCompletions={1}
            key={generateRandomId()}
          />

          <Tasks.Task
            Icon={SiCoursera}
            title="Aprenda mais sobre investimento"
            description="compre um curso de investimentos e aprenda mais sobre o seu perfil investidor, assista 10 min de aula por dia durante 1 semana"
            frequency={7}
            numberOfCompletions={4}
            key={generateRandomId()}
          />
        </Tasks>
      </main>
    </section>
  )
}
