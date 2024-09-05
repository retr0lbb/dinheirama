"use client";
import { notFound } from "next/navigation";
import { Chart } from "@/components/graph-component/graph";
import { RadioButton } from "@/components/radio-button";
import { useState } from "react";
import { Button } from "@/components/button";
import { FaPlus } from "react-icons/fa";
import { IoFastFoodOutline, IoTrashOutline } from "react-icons/io5";
import { TiArrowSortedUp } from "react-icons/ti";
import { SiNubank } from "react-icons/si";


interface UserPageProps{
    params: {
        user: string;
      };
}

enum MODAL_CONTROL{
    NONE = 0
}
    

export default function UserPage({params}: UserPageProps){
    const [numberOfRegisters, setNumberOfRegisters] = useState(10);


    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfRegisters(Number(event.target.value));
    };

    const {user} = params

    if(!user){
        notFound()
    }

     return(
        <section className="w-full h-full p-5 overflow-hidden">
            <div className="w-full">
                <h1 className="text-snow-400 font-bold text-6xl">Saldo e despesas</h1>
                <p className="text-lg text-snow-800">não ha nenhum problema em gastar dinheiro des de que esse gasto seja consiente.</p>
            </div>
            
            <div className="w-full grid grid-cols-5 grid-rows-4 gap-2">
                    
                <div className="bg-snow-800 p-4 rounded-lg space-y-4">
                    <div>
                        <p className="text-snow-600">Saldo disponivel</p>
                        <h1 className="text-5xl font-bold text-snow-400">R$350.29</h1>
                    </div>
                    <div className="flex items-center text-snow-600 gap-2 justify-between">
                        <p>69**-***-**12</p> <SiNubank className="size-8 text-purple-600"/>
                    </div>
                </div>

                <div className="col-span-4 row-span-1 bg-red-500">
                    
                </div>
                    
                
                
                <div className="flex w-full items-center gap-2">
                    <div className="bg-snow-800 rounded-xl p-4 text-snow-400 border border-snow-600/20">
                        <p className="text-snow-600 text-sm">Montly Income</p>
                        <div className="flex items-center justify-between gap-2">
                            <TiArrowSortedUp className="text-ofice_green size-5" />
                            <p className="font-bold text-2xl">R$1.200,00</p>
                        </div>
                    </div>
                    <div className="bg-snow-800 rounded-xl p-4 text-snow-400 border border-snow-600/20">
                        <p className="text-snow-600 text-sm">Montly Expenses</p>
                        <div className="flex items-center justify-between gap-2">
                            <TiArrowSortedUp className="text-danger_red rotate-180 size-5" />
                            <p className="font-bold text-2xl">R$947,00</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}


/**
 * 
 * 
 * <div className="flex flex-col items-center gap-2">
                            
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="10 dias" name="daysby" id="10button" value={10}/>
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="15 dias" name="daysby" id="15button" value={15}/>
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="30 dias" name="daysby" id="30button" value={30}/>

                            <div>
                                <Chart numberOfRegister={numberOfRegisters}/>
                            </div>
                        </div>
 */