import React from "react"
import type {BankCard} from "./bank-card"

interface RootProps {
    children: React.ReactElement<typeof BankCard>[];
}
export function Root({children}: RootProps){
    return(
        <div className="relative col-span-2 row-span-2 m-4">
            {React.Children.map(children, (child, index) => {

                const offsets = [2, 4, 6, 8]; // Pode ajustar conforme o número de BankCards.
                const offset = offsets[index % offsets.length]; // Aplica um offset cíclico.

                return React.cloneElement(child, {})
            })}
        </div>
    )
}