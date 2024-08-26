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
            <p className="text-red-50">{user}</p>
        </Modal>
    )
}