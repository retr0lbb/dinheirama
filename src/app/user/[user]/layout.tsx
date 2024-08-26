import React from "react";
import { NavigationBar } from "@/components/navigation-bar";
import { Avatar } from "@/components/avatar";
import { FaPiggyBank, FaCar, FaScroll, FaCog, FaUser, FaMoneyBillWaveAlt } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import RAL from "@/static/ralsei.jpg";

interface UserLayoutProps {
    children: React.ReactNode,
    params: {
        user: string
    }
}

export default function UserLayout({children, params}: UserLayoutProps){
    const { user } = params;
    
    return(
        <section className="h-screen flex bg-black">
            <div className="h-full flex flex-col border-r bg-snow-800/50 border-snow-600/10 shadow shadow-snow-600 py-5 space-y-4 min-w-60 max-w-80">

                <div className="flex items-center w-full py-1 px-4 justify-center gap-4">
                    <Avatar sizes="lg" href={RAL} fallback="A" />
                    <div className="w-28 overflow-hidden truncate">
                        <span className="text-snow-400 font-bold text-xl overflow-hidden">{user}</span>
                        <div>
                            <p className="text-apple_green text-md">Level 48</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center px-4">
                    <div className="w-full h-px border border-snow-800 rounded-full" />
                </div>

                <NavigationBar>
                    <NavigationBar.NavLink isActive Icon={FaMoneyBillWaveAlt} title="Saldo" />
                    <NavigationBar.NavLink Icon={TbTargetArrow} title="Objetivos" />
                    <NavigationBar.NavLink Icon={FaScroll} title="Missões" />
                    <NavigationBar.NavLink Icon={FaUser} title="Perfil" />
                    <NavigationBar.NavLink Icon={FaPiggyBank} title="Investimentos" />
                    <NavigationBar.NavLink Icon={FaCog} title="Configurações" />
                </NavigationBar>

                <div className="w-full flex items-center justify-center px-4">
                    <div className="w-full h-px border border-snow-800 rounded-full" />
                </div>

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