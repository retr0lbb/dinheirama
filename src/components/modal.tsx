import React from "react";
import { IoMdClose } from "react-icons/io";


interface ModalProps {
    children?: React.ReactNode
}


function Modal({children}: ModalProps){
    return(
        <div className="absolute inset-0 w-full h-full bg-black/60 filter flex items-center justify-center">
            <div className="flex flex-row p-4 bg-snow-800 rounded-lg">
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
        <div className="flex gap-3">
            <div className="flex flex-col flex-1">
                <h1 className="text-snow-400 text-3xl font-bold">{title}</h1>
                {desc && <p className="text-snow-600">{desc}</p>}
            </div>

            <div className="flex text-snow-400 text-2xl cursor-pointer hover:text-snow-600 transition-all bg-red-400">
                <IoMdClose />
            </div>
        </div>
    )
}

function Body(){

}



Modal.Title = Title;
Modal.Body = Body;

export { Modal }