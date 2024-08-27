import React from "react";
import { IoMdClose } from "react-icons/io";


interface ModalProps {
    children?: React.ReactNode
}


function Modal({children}: ModalProps){
    return(
        <div className="absolute inset-0 w-full h-full bg-black/60 filter flex items-center justify-center">
            <div className="flex flex-col items-center justify-center px-4 py-2 bg-snow-800 rounded-lg">
                {children}
            </div>
        </div>
    )
}


interface TitleProps{
    title: string,
    desc?: string
}
function Title({desc, title}: TitleProps){
    return(
        <div className="flex items-baseline gap-3">
            <div className="flex flex-col flex-1">
                <h1 className="text-snow-400 text-lg font-bold">{title}</h1>
                {desc && <p className="text-snow-600 text-sm">{desc}</p>}
            </div>

            <div className="flex text-snow-400 text-2xl cursor-pointer hover:text-snow-600 transition-all p-1">
                <IoMdClose />
            </div>
        </div>
    )
}

interface BodyProps{
    children: React.ReactNode;
}

function Body({children}:BodyProps){
    return(
        <div className="flex flex-col p-2">
            {children}
        </div>
    )
}



Modal.Title = Title;
Modal.Body = Body;

export { Modal }