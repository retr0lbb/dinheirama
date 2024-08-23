import { AiOutlineBarChart } from "react-icons/ai";

export function NavigationBar(){
    return(
        <nav className="p-2 flex-1">
            <ul className="flex-1 w-full text-snow-400">
                <li>
                    <a href="" className="flex items-center text-2xl font-bold">
                        <AiOutlineBarChart />
                        Objetivos
                    </a>
                </li>
                <li>Missões</li>
            </ul>
        </nav>
    )
}