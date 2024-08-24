import { AiOutlineBarChart } from "react-icons/ai";
import { FaCog } from "react-icons/fa";
import { MdTask } from 'react-icons/md'

export function NavigationBar(){
    return(
        <nav className="flex-1 antialiased">
            <ul className="flex-1 flex flex-col w-full gap-2 text-snow-600">
                <li className="relative group">
                    <a href="" className="flex items-center gap-2 text-lg px-6 py-4 hover:bg-apple_green/10 transition-all">
                        <AiOutlineBarChart 
                          size={28} 
                          className="text-snow-600 group-hover:text-apple_green transition-all" 
                        />
                        <p className="text-snow-400 group-hover:text-apple_green transition-all">Objetivos</p>
                    </a>
                </li>

                <li className="relative group">
                    <a href="" className="flex items-center gap-2 text-lg px-6 py-4 hover:bg-apple_green/10 transition-all">
                        <FaCog 
                          size={28} 
                          className="text-snow-600 group-hover:text-apple_green transition-all" 
                        />
                        <p className="text-snow-400 group-hover:text-apple_green transition-all">Configurações</p>
                    </a>
                </li>

                <li className="relative group">
                    <a href="" className="flex items-center gap-2 text-lg px-6 py-4 hover:bg-apple_green/10 transition-all">
                        <MdTask 
                          size={28} 
                          className="text-snow-600 group-hover:text-apple_green transition-all" 
                        />
                        <p className="text-snow-400 group-hover:text-apple_green transition-all">Missões</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}