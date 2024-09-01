"use client";
import { Button } from "@/components/button";
import MontainGraph from "@/components/graph-component/graph";
import { Modal } from "@/components/modal";
import { notFound } from "next/navigation";
import { FaCarSide } from "react-icons/fa6";
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
        <section className="w-full h-full p-5 space-y-8">
            <div className="w-full">
                <h1 className="text-4xl text-snow-400 text-left font-semibold">Saldo e Extrato</h1>
            </div>

            <div>
                <div className="w-full h-full  gap-10 p-4">
                    <div>
                        <p className="text-lg text-snow-600">Saldo Atual</p>
                        <h1 className="text-left text-snow-400 font-bold text-6xl">R$1,941.29</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}