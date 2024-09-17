import type { PageProps } from '../../../../../.next/types/app/layout'
import { ObjectiveHeader } from '@/components/objectives/objectiveHeader'

export default function ObjectivesPage({ params, searchParams }: PageProps) {
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl font-bold text-snow-400">Meus Objetivos.</h1>
        <p className="text-snow-600">
          Com objetivos definidos temos mais possibilidade de cumpri-los.
        </p>
      </div>

      <main className="flex-1 flex flex-col">
        <ObjectiveHeader />

        <div>
          <h2>Outros objetivos cadastrados</h2>
          <div className="flex flex-col gap-2">
            <div></div>
          </div>
        </div>
      </main>
    </section>
  )
}
