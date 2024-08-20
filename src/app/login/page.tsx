import { Button } from "@/components/button";
import { Link } from "@/components/link";

export default function Login(){
    return(
        <main className="h-screen bg-black flex items-center justify-center antialiased">
            {/* main div */}
            <div className="space-y-8">
                <header className="flex items-center justify-center flex-col gap-2">
                    <h1 className="text-5xl text-snow-400 font-bold">Seja bem vindo de volta!</h1>
                    <p className="text-xl text-snow-600">é sempre um prazer ter você de volta</p>
                </header>

                <div className="">
                    <form className="px-4 space-y-5" action="">
                        <div className="space-y-4">
                            <div className="flex flex-col px-4">
                                <label className="text-snow-600" htmlFor="name">Email</label>
                                <input 
                                  className="py-2 px-5 text-snow-400 bg-transparent outline-none border border-snow-800 rounded-lg focus:border-apple_green transition-all" 
                                  name="email" 
                                  id="email" 
                                  type="email" 
                                  placeholder="example@mail.com" 
                                />
                            </div>

                            <div className="flex flex-col px-4">
                                <label className="text-snow-600" htmlFor="name">Password</label>
                                <input 
                                  className="py-2 px-5 text-snow-400 bg-transparent outline-none border border-snow-800 rounded-lg focus:border-apple_green transition-all" 
                                  name="email" 
                                  id="email" 
                                  type="password" 
                                  placeholder="password" 
                                />
                                <p className="text-sm text-apple_green w-full text-right mt-2"><Link>Esqueci minha senha.</Link></p>
                            </div>
                       </div>


                        <div className="grid place-items-center px-4">
                            <Button type="submit" sizes="md" className="">
                                Entrar
                            </Button>
                        </div>

                        {/* divider with button */}
                        <div className="w-full flex items-center justify-center text-snow-600 text-xs">
                            <div className="bg-snow-600 w-full h-px rounded"/>
                            <p className="mx-5">OU</p>
                            <div className="bg-snow-600 w-full h-px rounded"/>
                        </div>

                    </form>
                </div>

            </div>
        </main>
    )
}