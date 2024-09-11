import { FcSimCardChip } from "react-icons/fc";
import { SiMastercard } from "react-icons/si";


export function StackedBankCards(){
    return(
        <div className="bg-gradient-to-br from-strong_violet to-dang_blue w-full h-full rounded-3xl aspect-video p-5 flex flex-col justify-evenly">
            <div className="w-full flex items-center justify-between">
                <FcSimCardChip className="size-20" />
                <SiMastercard className="size-20 text-snow-200"/>
            </div>

            <div className="flex flex-1 justify-center flex-col">
                <h1 className="text-snow-400 text-xl">Saldo</h1>
                <p className="text-snow-200 font-semibold text-6xl"><span>R$</span> 2,817.90</p>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-light text-snow-400 text-lg">Débito</h1>
                    <p className="text-snow-200 font-semibold text-2xl"><span>••••</span> <span>••••</span> <span>••••</span> <span>2871</span></p>
                </div>

                <div>
                    <h1 className="font-light text-snow-400 text-lg">Data Validade</h1>
                    <p className="font-semibold text-2xl text-snow-200">12/31</p>
                </div>
            </div>
        </div>
    )
}