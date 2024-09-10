"use client";
import { notFound } from "next/navigation";
import { Chart } from "@/components/graph-component/graph";
import { RadioButton } from "@/components/radio-button";
import { useState } from "react";
import { Button } from "@/components/button";
import { FaPlus } from "react-icons/fa";
import { IoFastFoodOutline, IoTrashOutline } from "react-icons/io5";
import { FaUber, FaPlaystation} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";
import { SiNubank, SiAudi } from "react-icons/si";
import { RangeSliderShown } from "@/components/slider-shown";


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
        <section className="w-full h-full p-5 overflow-y-auto flex flex-col space-y-10">
            <div className="w-full p-4 space-y-1">
                <h1 className="text-snow-400 font-bold text-6xl">Saldo e despesas</h1>
                <p className="text-snow-600 text-lg">Lembre-se gaste concientemente e mude o seu estilo de vida, esse é o primeiro passo para ficar rico</p>
            </div>
            
            <div className="w-full grid grid-cols-5 grid-rows-4 gap-2">
                    
                <div className="flex flex-col justify-between col-span-2 border border-snow-800 shadow shadow-snow-400/10 p-4 rounded-lg space-y-4">
                    <div>
                        <p className="text-snow-600">Saldo disponivel</p>
                        <h1 className="text-5xl font-bold text-snow-400">R$350.29</h1>
                    </div>
                    <div className="flex items-center text-snow-600 gap-2 justify-between">
                        <p>69**-***-**12</p> <SiNubank className="size-8 text-purple-600"/>
                    </div>
                </div>

                
                <div className="col-span-3 row-span-3 flex flex-col items-center overflow-hidden gap-8">
                    <div className="flex items-center justify-between w-full px-8">
                        <h1 className="text-4xl text-snow-400">Saldo e gasto.</h1>

                        <div className="flex gap-2">
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="10 dias" name="daysby" id="10button" value={10}/>
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="15 dias" name="daysby" id="10button" value={15}/>
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="30 dias" name="daysby" id="10button" value={30}/>
                        </div>
                    </div>
                    <div className="w-full h-full flex-1">
                        <Chart numberOfRegister={numberOfRegisters} />
                    </div>
                </div>
                
                
                <div className="flex w-full col-span-2 items-center gap-2">
                    <div className="bg-snow-800 w-full rounded-xl p-5 text-snow-400 border border-snow-600/20">
                        <p className="text-snow-600 text-sm">Montly Income</p>
                        <div className="flex items-center justify-end gap-2">
                            <TiArrowSortedUp className="text-ofice_green size-5" />
                            <p className="font-bold text-2xl">R$1.200,00</p>
                        </div>
                    </div>
                    <div className="bg-snow-800 w-full rounded-xl p-5 text-snow-400 border border-snow-600/20">
                        <p className="text-snow-600 text-sm">Montly Expenses</p>
                        <div className="flex items-center justify-end gap-2">
                            <TiArrowSortedUp className="text-danger_red rotate-180 size-5" />
                            <p className="font-bold text-2xl">R$947,00</p>
                        </div>
                    </div>
                </div>

                <div className="flex col-span-2 gap-2 flex-col">
                    <div>
                        <h1 className="text-3xl text-snow-400 font-bold">Principais gastos</h1>
                    </div>

                    <div className="flex flex-1 items-center gap-3 justify-around">
                        <div className="bg-danger_red text-snow-200 rounded-2xl relative p-2 w-full h-32 flex flex-col">
                            <h1 className="">Alimentação</h1>
                            <p className="text-sm font-bold mt-1">R$121,98</p>
                            <FaBowlFood className="absolute size-6 bottom-4 left-4" />
                        </div>

                        <div className="bg-dang_blue text-snow-200 rounded-2xl relative p-2 w-full h-32 flex flex-col">
                            <h1 className="">Transporte</h1>
                            <p className="text-sm font-bold mt-1">R$97,38</p>
                            <FaUber className="absolute size-6 bottom-4 left-4" />
                        </div>

                        <div className="bg-[#7209b7] text-snow-200 rounded-2xl relative p-2 w-full h-32 flex flex-col">
                            <h1 className="">Jogos</h1>
                            <p className="text-sm font-bold mt-1">R$201,98</p>
                            <FaPlaystation className="absolute size-6 bottom-4 left-4" />
                        </div>
                    </div>
                </div>

                <div className="rounded-xl p-5 col-span-5 flex flex-col justify-center">
                    <div className="flex items-center">
                        <div className="">
                            <h1 className="text-snow-400 text-2xl font-bold">Para o proximo objetivo:</h1>  
                            <div className="flex items-center gap-2">
                                <SiAudi className="text-apple_green size-16" />
                                <h1 className="text-snow-400">Comprar um carro novo</h1>
                            </div>
                        </div>

                        <div>
                            <p className="text-snow-400">R$400/1000</p>
                        </div>
                    </div>
                    <div className="flex items-center w-96 gap-2 text-snow-400">
                        <p>R$100</p>
                        <RangeSliderShown minValue={100} maxValue={1000} percentage={478} />
                        <p>R$1.000,00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}