import { SiAudi } from 'react-icons/si'
import { RangeSliderShown } from '../slider-shown'

export function ObjectiveHeader() {
  return (
    <div className="rounded-xl p-5 col-span-5 flex flex-col justify-center">
      <div className="">
        <h1 className="text-snow-400 text-2xl font-bold">
          Para o proximo objetivo:
        </h1>
        <div className="flex items-center">
          <div className="flex flex-1 items-center gap-2">
            <SiAudi className="text-apple_green size-16" />
            <h1 className="text-snow-400">Comprar um carro novo</h1>
          </div>
          <div>
            <p className="text-snow-400 text-3xl">
              R$ 10,000/<span className="text-snow-600">30,000</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full gap-2 text-snow-400">
        <RangeSliderShown minValue={0} maxValue={30000} percentage={10000} />
      </div>
    </div>
  )
}
