import { Button } from "@/components/button";
import { Input } from "@/components/input"
import { FiSmartphone } from "react-icons/fi";

export default function TwoFactorLoginIfMust(){
    return(
        <main className="h-screen flex flex-col items-center justify-center space-y-8 bg-black">
            <div className="text-snow-400 text-center">
                <h1 className="text-4xl font-bold">Autentificação de 2 fatores</h1>
                <p className="text-snow-600 text-sm">Digite a baixo o codigo enviado para o seu celular cadastrado na autentificação de 2 fatores</p>
            </div>

            <div className="flex flex-col text-snow-400 items-center">
                <FiSmartphone size={128} />

                <div className="space-y-4 mt-5">
                    
                    <div className="flex items-center justify-center w-48 ">
                        <Input types="digit" Title="">
                            <Input.Field
                             type="number"
                            />
                        </Input>
                        <Input Title="">
                            <Input.Field 
                             
                             type="number"
                            />
                        </Input>
                        <Input Title="">
                            <Input.Field 
                             
                             type="number"
                            />
                        </Input>
                        <Input Title="">
                            <Input.Field 
                             
                             type="number"
                            />
                        </Input>
                        <Input Title="">
                            <Input.Field 
                             
                             type="number"
                            />
                        </Input>
                        <Input Title="">
                            <Input.Field 
                             
                             type="number"
                            />
                        </Input>
                    </div>
                    <Button >
                        Verificar
                    </Button>
                </div>
            </div>
        </main>
    )
}