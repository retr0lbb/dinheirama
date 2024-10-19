import { moneyFormatter } from '@/utils/money-string-formatter'

interface BankAccountCardProps {
  balance: number
  accountNumber: string
  accountOwner: string
  accountType: 'Corrente' | 'Poupança' | 'Outro'
  BankLogo: React.ComponentType<{ className?: string }>
  ConectedCardLogo: React.ComponentType<{ className?: string }>
}

export function BankAccountCard(props: BankAccountCardProps) {
  return (
    <div className="bg-snow-800 px-8 py-5  w-full rounded-lg border flex justify-between gap-10 border-snow-600/20">
      <div className="flex flex-1 flex-grow flex-col h-full gap-1">
        <h1 className="font-bold text-3xl text-snow-400">
          {moneyFormatter.format(props.balance)}
        </h1>
        <p className="text-sm text-snow-600 font-bold">{props.accountOwner}</p>

        <div className="text-4xl text-purple-600 flex flex-1 mt-4">
          <props.BankLogo />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 place-items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-snow-600 text-sm font-bold">numero de conta</h1>
          <p className="text-2xl text-snow-400">{props.accountNumber}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-snow-600 text-sm font-bold">Tipo de conta</h1>
          <p className="text-2xl text-snow-400">{props.accountType}</p>
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <h1 className="text-snow-600 text-sm font-bold">
            Cartões vinculados
          </h1>

          <div className="flex items-center justify-center gap-1">
            <props.ConectedCardLogo className="text-3xl text-snow-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}
