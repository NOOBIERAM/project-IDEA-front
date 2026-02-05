import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Power } from "lucide-react";

const IdeaNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className="w-full min-h-15 bg-white backdrop-blur-3xl flex items-center justify-between px-10 shadow-lg shadow-gray-100">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-bold max-sm:hidden">
                Project-IDEA
            </span>
            <ul className="max-sm:w-full flex space-x-15 items-center justify-between  font-semibold">
                <NavLink to="/idea">Assistance IA</NavLink>
                <NavLink to="/idea/saved">Projet</NavLink>
                <NavLink to="/idea/trash">Corbeille</NavLink>
            </ul>
            <div className="flex space-x-3 items-center font-semibold max-sm:hidden">
                <h1>{user?.username}</h1>
                <button onClick={logout} className="text-red-400 flex items-center justify-center space-x-3 rounded-xl border border-red-400 p-2 hover:bg-red-400 hover:text-white "><Power size={22}/><span>Deconnexion</span></button>
            </div>
        </nav>
    )
}

export default IdeaNavbar