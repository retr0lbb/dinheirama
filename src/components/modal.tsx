import React from "react";



interface ModalProps {
    children?: React.ReactNode
}
function Modal({children}: ModalProps){
    return(
        <div className="absolute inset-0 w-full h-full bg-black/60 filter flex items-center justify-center">
            {children}
        </div>
    )
}


function Title(){
    <p></p>
}

function Body(){

}

export { Modal }