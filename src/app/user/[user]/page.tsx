import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { notFound } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface UserPageProps{
    params: {
        user: string;
      };
}

export default function UserPage({params}: UserPageProps){
    const {user} = params

    if(!user){
        notFound()
    }

     return(
        <Modal>
            <Modal.Title title="Ja conhece nossa plataforma?" desc="Veja esse pequeno tour de como ultilzar a plataforma."/>
            <Modal.Body>
                <div className="flex items-center justify-center text-snow-400 aspect-video w-80 h-auto bg-black">
                    <FaPlay />
                </div>
                <div className="flex items-center justify-center gap-2 mt-5">
                    <Button sizes="sm">
                        Não, Obrigado.
                    </Button>

                    <Button sizes="sm">
                        Quero conhecer!
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}