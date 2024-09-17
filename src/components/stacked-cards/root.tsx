import React, { useState } from "react";
import { BankCard, CardProps } from "./bank-card";




export function Root() {
    const [cards, setCards] = useState<CardProps[]>([
        { cardData: { accountType: "Poupança", ammount: 1002032, expirationDate: "09/25", accountLast4DigitsNumber: 1293 }, isDragAble: false, },
        { cardData: { accountType: "Débito", ammount: 102.12, expirationDate: "12/26", accountLast4DigitsNumber: 7781 }, isDragAble: false, gradientColors: "greenToLime" },
        { cardData: { accountType: "Crédito", ammount: 991001, expirationDate: "12/25", accountLast4DigitsNumber: 2212 }, isDragAble: false, gradientColors: "toRemedyRedToLead"},
    ]);

    function reOrganizeCardsArray(){
        const lastCard = cards[cards.length - 1]
        setCards(prev => prev.filter((card, index) => {
            
            return index !== prev.length - 1
        }))
        setCards(prev => [lastCard, ...prev])
    }

    const zIndex = [30, 40, 50];
    const offsets = [4, 2, 0]; 

    return (
        <div className="relative col-span-2 row-span-2 m-4">
            {cards.map((card, index) => {
                const currentZIndex = zIndex[index] || 20;
                const offset = offsets[index] || 0; 



                return (
                    <BankCard
                        key={index}
                        cardData={card.cardData}
                        isDragAble={index + 1 === cards.length}
                        gradientColors={card.gradientColors}
                        Zindex={currentZIndex as 20 | 50 | 40 | 30 | undefined} 
                        offset={offset as 2 | 4 | 6 | 8 | undefined}
                        handleDragEnd={reOrganizeCardsArray}
                    />
                );
            })}
        </div>
    );
}
