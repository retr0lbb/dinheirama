interface AvatarProps {
    href?: string
    fallback: string
}
import Image from "next/image"

export function Avatar({fallback, href}: AvatarProps){
    return(
        <div className="size-10 overflow-hidden rounded-full bg-yellow-500 flex items-center justify-center outline outline-offset-1 outline-apple_green">
            {href && (
                <Image src={href} alt="Imagem de avatar do usuario, imagem pequena em formato circular" />
            )}

            {!href && (
                <p>{fallback}</p>
            )}
        </div>
    )
}
