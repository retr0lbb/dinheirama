import React from "react";
import { NavigationBar } from "@/components/navigation-bar";

interface DashboardRootLayout {
    children: React.ReactNode
}

export default function DashboardLayout({children}: DashboardRootLayout){
    return(
        <section className="h-screen flex bg-black">

            <div className="h-full flex flex-col bg-snow-800 py-5 px-6 space-y-4 min-w-60">

                {/* header com nome de usuario */}

                <div className="flex items-center gap-4">
                    <div className="size-10 overflow-hidden rounded-full bg-yellow-500 flex items-center justify-center outline outline-offset-1 outline-apple_green">
                        A
                    </div>

                    <div>
                        <p className="text-snow-400 font-bold">Henrique B</p>
                        <div>
                            <p className="text-ofice_green text-xs">Level 48</p>
                        </div>
                    </div>
                </div>

                <NavigationBar />
            </div>

            {children}
        </section>
    )
}