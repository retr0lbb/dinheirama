"use client";
import { Button } from "@/components/button";
import MontainGraph from "@/components/graph-component/graph";
import { Modal } from "@/components/modal";
import { notFound } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";


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
        <section className="w-full h-full p-5">
            <div className="w-full">
                <h1 className="text-4xl text-snow-400 text-center font-semibold">Saldo e Extrato</h1>
            </div>

            <div className="overflow-y-auto grid grid-cols-3 gap-2 px-10">

                <div className="flex flex-col gap-3 w-full h-auto aspect-video bg-snow-800 border border-snow-200/10 rounded-lg p-2">
                    <div className="flex flex-col text-snow-400">
                        <p className="text-xs text-snow-600">Saldo Anterior</p>
                        <h1 className="text-3xl font-bold">$428.95</h1>
                    </div>

                    <div className="flex items-center justify-center flex-1">
                        <MontainGraph />
                    </div>
                </div>


                <div className="flex flex-col gap-3 w-full h-auto aspect-video bg-snow-800 border border-snow-200/10 rounded-lg p-2">
                    <div className="flex items-center">
                        <div>
                            <p className="text-xs text-snow-600">Total de saldo gasto</p>
                            <h1 className="text-4xl text-danger_red font-bold">-$58.72</h1>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-apple_green flex items-center justify-center">
                                <p className="text-sm">25.02%</p>
                                <IoMdArrowDropdown className="text-3xl" />
                            </div>
                            <p>Gastou menos que o mes passado</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}