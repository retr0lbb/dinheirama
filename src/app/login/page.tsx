import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link } from "@/components/link";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

export default function Login(){
    return(
        <main className="h-screen bg-black flex items-center justify-center antialiased">
            {/* main div */}
            <div className="space-y-8">
                <header className="flex items-center justify-center flex-col gap-2">
                    <h1 className="text-5xl text-snow-400 font-bold">Seja bem vindo de volta!</h1>
                    <p className="text-xl text-snow-600">é sempre um prazer ter você de volta</p>
                </header>

                <div className="space-y-5">
                    <form className="px-4 space-y-5" action="">
                        <div className="space-y-4">

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
                            <p className="text-sm text-apple_green w-full text-right pr-4"><Link>Esqueci minha senha.</Link></p>


                            <Input Title="Teste tamanho icones">
                                <IoLogoAndroid />
                                <Input.Field 
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="Sua senha"
                                />
                            </Input>
                       </div>


                        <div className="grid place-items-center px-4">
                            <Button type="submit" sizes="md" className="">
                                Entrar
                            </Button>
                        </div>

                        {/* divider with button */}
                    </form>
                    <div className="w-full flex items-center justify-center text-snow-600 text-xs px-6">
                        <div className="bg-snow-600 w-full h-px rounded"/>
                        <p className="mx-5">OU</p>
                        <div className="bg-snow-600 w-full h-px rounded"/>
                    </div>

                    <div className="flex items-center justify-around gap-2 text-lg">
                        <Button variant="secondary" sizes="sm" className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600">
                            <FaGoogle className="text-snow-400"></FaGoogle> Entre com o Google.
                        </Button>

                        <Button variant="secondary" sizes="sm" className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600">
                            <FaXTwitter className="text-snow-400"></FaXTwitter> Entre com Twitter.
                        </Button>

                        <Button variant="secondary" sizes="sm" className="flex flex-row h-10 py-0 flex-grow-0 flex-shrink-0 w-auto gap-2 text-snow-600">
                            <FaApple className="text-snow-400"></FaApple> Entre com Apple.
                        </Button>
                    </div>
                </div>

            </div>
        </main>
    )
}