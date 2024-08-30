"use client";
import { Button } from "@/components/button";
import MontainGraph from "@/components/graph-component/graph";
import { Modal } from "@/components/modal";
import { notFound } from "next/navigation";
import { FaScroll } from "react-icons/fa";
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

            <div className="overflow-y-auto grid grid-cols-3 px-10">
                <div className="flex flex-col gap-4 w-full h-auto aspect-video bg-snow-800 border border-snow-200/10 rounded-lg p-5 col-span-1">
                    <div className="flex flex-col text-snow-400">
                        <p className="text-lg text-snow-600">Saldo Anterior</p>
                        <h1 className="text-5xl font-bold">$428.95</h1>
                    </div>
                </div>


            </div>
        </section>
    )
}