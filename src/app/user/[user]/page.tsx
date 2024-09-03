"use client";
import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { notFound } from "next/navigation";
import { FaCarSide } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Chart } from "@/components/graph-component/graph";
import { RadioButton } from "@/components/radio-button";


interface UserPageProps{
    params: {
        user: string;
      };
}

enum MODAL_CONTROL{
    NONE = 0
}


export default function UserPage({params}: UserPageProps){
    
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
            
            <div className="w-full flex">
                <div className="w-1/2 flex flex-col space-y-8">
                    <div className="flex w-full items-end justify-between pl-10 pr-2">
                        <div>
                            <p className="text-snow-600">Saldo total</p>
                            <h1 className="text-5xl font-bold text-snow-400">R$350.29</h1>
                        </div>


                        <div className="flex items-center gap-2">
                            <RadioButton Label="10 dias" name="daysby" id="10button" value={10}/>
                            <RadioButton Label="15 dias" name="daysby" id="15button" value={15}/>
                            <RadioButton Label="30 dias" name="daysby" id="30button" value={30}/>
                        </div>
                    </div>
                    <Chart />
                </div>
                <div className="w-1/2 bg-red-600">

                </div>
            </div>
        </section>
    )
}