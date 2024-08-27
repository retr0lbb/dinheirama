import { Modal } from "@/components/modal";
import { notFound } from "next/navigation";

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
        </Modal>
    )
}