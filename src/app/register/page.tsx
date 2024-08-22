import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { LinkComponent } from "@/components/link";
import { FaApple, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Register(){
    return(
        <main className="h-screen bg-black flex items-center justify-center antialiased">
            {/* main div */}
            <div className="space-y-8">
                <header className="flex items-center justify-center flex-col gap-2">
                    <h1 className="text-5xl text-snow-400 font-bold">Quer começar a economizar?</h1>
                    <p className="text-xl text-snow-600">Crie sua conta hoje mesmo de forma gratuita</p>
                </header>

                <div className="space-y-5">
                    <form className="px-12 space-y-5" action="">
                        <div className="space-y-4">

                            <Input Title="Nome Completo">
                                <Input.Field
                                  type="text"
                                  name="name"
                                  id="name"
                                  placeholder="Fulano da silva"
                                />
                            </Input>

                            <Input Title="Numero de contato">
                                <Input.Field 
                                  type="number"
                                  name="tel"
                                  id="tel"
                                  placeholder="(01) 12345-6789"
                                />     
                            </Input>

                            <Input Title="Email">
                                <Input.Field
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="example@mail.com"
                                />
                            </Input>

                            <Input Title="Senha">
                                <Input.Field 
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="Sua senha"
                                />
                            </Input>

                            <Input Title="Confirmar senha">
                                <Input.Field 
                                  type="password"
                                  name="cpass"
                                  id="cpass"
                                  placeholder="Confirme sua senha"
                                />
                            </Input>
                       </div>


                        <div className="grid place-items-center px-4 gap-4">
                            <Button type="submit" sizes="md" className="">
                                Registar
                            </Button>
                            <span className="text-snow-600 text-lg w-full px-5 text-center">Já tem uma conta? <LinkComponent href={"/login"}>Login</LinkComponent></span>
                        </div>

                        {/* divider with button */}
                    </form>
                    <div className="w-full flex items-center justify-center text-snow-600 text-xs px-14">
                        <div className="bg-snow-600 w-full h-px rounded"/>
                        <p className="mx-5">OU</p>
                        <div className="bg-snow-600 w-full h-px rounded"/>
                    </div>

                    <div className="flex items-center px-8 justify-around gap-2 text-lg">
                        <Button variant="secondary" sizes="sm" className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600">
                            <FaGoogle className="text-snow-400"></FaGoogle> Cadastre-se com o Google.
                        </Button>

                        <Button variant="secondary" sizes="sm" className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600">
                            <FaXTwitter className="text-snow-400"></FaXTwitter> Cadastre-se com Twitter.
                        </Button>

                        <Button variant="secondary" sizes="sm" className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600">
                            <FaApple className="text-snow-400"></FaApple> Cadastre-se com Apple.
                        </Button>
                    </div>
                </div>

            </div>
        </main>
    )
}