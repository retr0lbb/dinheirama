"use client";
import { notFound } from "next/navigation";
import { Chart } from "@/components/graph-component/graph";
import { RadioButton } from "@/components/radio-button";
import { useState } from "react";
import { Button } from "@/components/button";
import { FaPlus } from "react-icons/fa";
import { IoFastFoodOutline, IoTrashOutline } from "react-icons/io5";

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
        <section className="w-full h-full p-5 space-y-10">
            <div className="w-full">
                <h1 className="text-snow-400 font-bold text-6xl">Saldo e despesas</h1>
                <p className="text-lg text-snow-800">não ha nenhum problema em gastar dinheiro des de que esse gasto seja consiente.</p>
            </div>
            
            <div className="w-full flex items-baseline justify-between gap-12">
                <div className="flex flex-col space-y-8 flex-1">
                    <div className="flex w-full items-end justify-between pl-10 pr-2">
                        <div>
                            <p className="text-snow-600">Saldo total</p>
                            <h1 className="text-5xl font-bold text-snow-400">R$350.29</h1>
                        </div>


                        <div className="flex items-center gap-2">
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="10 dias" name="daysby" id="10button" value={10}/>
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="15 dias" name="daysby" id="15button" value={15}/>
                            <RadioButton onChange={handleRadioChange} sizes="md" Label="30 dias" name="daysby" id="30button" value={30}/>
                        </div>
                    </div>
                    <Chart numberOfRegister={numberOfRegisters}/>
                </div>
                <div className="flex items-center justify-center w-1/3">
                    <div className="bg-snow-800 rounded-md px-5 py-4 flex flex-col items-center justify-center w-full">
                        <div>
                            <h1 className="text-3xl text-snow-400 font-bold">Classificar Gastos</h1>
                            <p className="text-sm text-snow-600">Classifique os seus gastos que teve no dia</p>
                        </div>

                        <div>

                            <div className="flex items-center justify-between">
                                <IoFastFoodOutline />
                                <p className="text-danger_red font-bold text-xl">-10.92</p>
                                <IoTrashOutline />
                            </div>

                        </div>


                        <div>
                            <Button>
                                <FaPlus />
                                <p>Cadastrar despesas</p>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>



            {/* Modal section area */}

        </section>
    )
}