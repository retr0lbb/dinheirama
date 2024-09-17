import { TiArrowSortedUp } from 'react-icons/ti'

export function ExpenseCard() {
  return (
    <div className="flex w-full col-span-2 items-center gap-2">
      <div className="bg-snow-800 w-full rounded-xl p-5 text-snow-400 border border-snow-600/20">
        <p className="text-snow-600 text-sm">Montly Income</p>
        <div className="flex items-center justify-end gap-2">
          <TiArrowSortedUp className="text-ofice_green size-5" />
          <p className="font-bold text-2xl">R$1.200,00</p>
        </div>
      </div>
    </div>
  )
}
