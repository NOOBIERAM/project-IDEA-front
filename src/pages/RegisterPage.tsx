import { ArrowLeft } from "lucide-react"
import computer from "../assets/computer.png"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
    const navigate = useNavigate()

    return <section id="register" className="min-h-screen  flex flex-col items-center justify-center lg:min-w-[1400px]">
        {/* <div className="bg-white absolute w-full h-full -z-1"></div> */}
        <div className=" lg:grid lg:grid-cols-2 shadow-2xl rounded-3xl bg-white lg:min-w-[1000px]">
            <div className="max-lg:hidden p-3 bg-gradient-to-tr from-purple-300 via-pink-300 to-cyan-200 rounded-3xl">
                <div className="bg-white/30 p-5 rounded-3xl backdrop-blur-3xl relative flex items-center justify-center h-full">

                    {/* Bouton en haut à gauche */}
                    <button className="absolute top-5 left-5 text-sm px-6 py-1 rounded-full hover:scale-105 transition-transform duration-300 flex items-center space-x-2 bg-white font-semibold"
                        onClick={() => navigate("/")}>
                        <ArrowLeft size={15} />
                        <span>Acceuil</span>
                    </button>

                    {/* Image centrée horizontalement et verticalement */}
                    <img
                        src={computer}
                        className="w-90 rotate-y-180 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                    />

                </div>
            </div>
            <form className="p-13 rounded-3xl flex flex-col space-y-12">
                <h1 className="text-3xl font-bold text-center">
                    Créer votre compte
                </h1>
                <div className="space-y-5">
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700">Nom d'utilisateur</label>
                        <input
                            type="text"
                            className="p-3 h-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700">Mots de passe</label>
                        <input
                            type="password"
                            className="p-3 h-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700">Confirmation du mots de passe</label>
                        <input
                            type="password"
                            className="p-3 h-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="rounded-full p-[2px]  bg-gradient-to-br from-pink-500 via-pink-500 to-purple-500">
                        <button className="w-full bg-white px-6 py-2 rounded-full font-semibold">
                            S'inscrire
                        </button>
                    </div>
                    <a href="/#/login" className="text-center text-sm mt-3 underline underline-offset-4">Déjà un compte ? Connectez-vous</a>
                </div>

            </form>
        </div>

    </section>
}
export default RegisterPage