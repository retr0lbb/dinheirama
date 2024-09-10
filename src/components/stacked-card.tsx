import { FcSimCardChip } from "react-icons/fc";
import { SiMastercard } from "react-icons/si";


export function StackedBankCards(){
    return(
        <div className="bg-gradient-to-br from-strong_violet to-dang_blue w-full h-full rounded-3xl aspect-video py-5 px-4">
            <div className="w-full flex items-center justify-between">
                <FcSimCardChip className="size-20" />
                <SiMastercard className="size-20 text-snow-200"/>
            </div>

            <div className="flex flex-col">
                <h1>saldo</h1>
                <p><span>R$</span> 2,817.90</p>
            </div>
        </div>
    )
}