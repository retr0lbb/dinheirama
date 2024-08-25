import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Avatar } from "@/components/avatar";
import { FaPiggyBank, FaCar, FaScroll, FaCog, FaUser, FaMoneyBillWaveAlt, FaSun } from "react-icons/fa";
import { TbMoonFilled } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@/components/button";


interface UserLayoutProps {
    children: React.ReactNode,
    params: {
        user: string
    }
}

export default function UserLayout({children, params}: UserLayoutProps){
    const { user } = params
    return(
        <section className="h-screen flex bg-black">
            <div className="h-full flex flex-col border-r bg-snow-800/50 border-snow-600/10 shadow shadow-snow-600 py-5 space-y-4 min-w-60">

                <div className="flex items-center w-full py-1 px-4 justify-center gap-4">
                    <Avatar fallback="A" />

                    <div>
                        <p className="text-snow-400 font-bold">{user}</p>
                        <div>
                            <p className="text-ofice_green text-xs">Level 48</p>
                        </div>
                    </div>
                </div>

                <NavigationBar>
                    <NavigationBar.NavLink Icon={FaPiggyBank} title="Saldo" />
                    <NavigationBar.NavLink Icon={FaCar} title="Objetivos" />
                    <NavigationBar.NavLink isActive Icon={FaScroll} title="Missões" />
                    <NavigationBar.NavLink Icon={FaUser} title="Perfil" />
                    <NavigationBar.NavLink Icon={FaMoneyBillWaveAlt} title="Investimentos" />
                    <NavigationBar.NavLink Icon={FaCog} title="Configurações" />
                </NavigationBar>

                <div className="w-full flex items-center justify-start px-5">
                    <div className="p-3 rounded-xl text-snow-400 
                    text-3xl cursor-pointer hover:text-snow-600">
                        <FiLogOut />
                    </div>
                </div>
            </div>

            {children}
        </section>
    )
}