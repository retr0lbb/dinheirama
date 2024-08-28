"use client";

import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { notFound } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

interface UserPageProps{
    params: {
        user: string;
      };
}

enum SHOW_MODAL{
    NONE = 0,
    HELP = 1
}

export default function UserPage({params}: UserPageProps){
    const [showModal, setShowModal] = useState(SHOW_MODAL.HELP)
    
    const {user} = params

    if(!user){
        notFound()
    }

     return(
        <Modal visible={showModal === SHOW_MODAL.HELP}>
            <Modal.Title onCloseButtonClick={() => setShowModal(SHOW_MODAL.NONE)} title="Ja conhece nossa plataforma?" desc="Veja esse pequeno tour de como ultilzar a plataforma."/>
            <Modal.Body>
                <div className="flex items-center justify-center text-snow-400 aspect-video w-80 h-auto bg-black">
                    <FaPlay />
                </div>
                <div className="flex items-center justify-center gap-2 mt-5">
                    <Button sizes="md" variant="danger">
                        Não, Obrigado.
                    </Button>

                    <Button sizes="md">
                        Quero conhecer!
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}