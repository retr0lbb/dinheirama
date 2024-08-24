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
        <h1>Hello {params.user}</h1>
    )
}