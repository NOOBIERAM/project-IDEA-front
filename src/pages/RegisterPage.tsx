import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import loginAnim from "../assets/animations/loginAnim.webm"
import croixAnim from "../assets/animations/croix.webm"
import { useState } from "react"
import { register } from "../api/auth.api"
import type { User } from "../types/User"

const RegisterPage = () => {
    const navigate = useNavigate()
    const [videAnimation, setVideAnimation] = useState(true);
    const [username, setUsername] = useState("RoutsGG")
    const [password, setPassword] = useState("123456")
    const [confirmPassword, setConfirmPassword] = useState("123456")
    const [errorMessage, setErrorMessage] = useState<string[] | null>(null);

    const handleRegister = async (e: any) => {
            e.preventDefault();
            try {
                const profile = await register({ username, password, confirmPassword });
                setUser(profile);
                navigate("/idea");
            } catch (error: any) {
                setVideAnimation(false);
                if (error.response) {
                    const message = error.response.data.message;
    
                    if (message === "Passwords do not match") {
                        setErrorMessage(["password","ne correspond pas"]);
                    } else if (message === "Username already exists") {
                        setErrorMessage(["username","existe déjà"]);
                    } else {
                        console.error("❌ Erreur inconnue :", message);
                    }
                } else {
                    console.error("Erreur réseau ou serveur :", error);
                }
            }
        };

    return <section id="register" className="min-h-screen  flex flex-col items-center justify-center lg:min-w-[1400px]">
        {/* <div className="bg-white absolute w-full h-full -z-1"></div> */}
        <div className=" lg:grid lg:grid-cols-2 shadow-2xl rounded-3xl bg-white lg:min-w-[1000px]">
            <div className="max-lg:hidden p-3 bg-gradient-to-tr from-purple-300 via-pink-300 to-cyan-200 rounded-3xl">
                <div className="bg-white/30 p-5 rounded-3xl backdrop-blur-3xl relative flex items-center justify-center h-full">

                    <button className="absolute top-5 left-5 text-sm px-6 py-1 rounded-full hover:scale-105 transition-transform duration-300 flex items-center space-x-2 bg-white font-semibold"
                        onClick={() => navigate("/")}>
                        <ArrowLeft size={15} />
                        <span>Acceuil</span>
                    </button>

                    <video
                        autoPlay
                        loop
                        muted
                        src={videAnimation ? loginAnim : croixAnim}
                        className={`${videAnimation ? "w-90" : "w-60"}`}
                    />

                </div>
            </div>
            <form className="p-13 rounded-3xl flex flex-col space-y-12" onSubmit={handleRegister}>
                <h1 className="text-3xl font-bold text-center">
                    Créer votre compte
                </h1>
                <div className="space-y-5">
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 flex items-center space-x-2"><span>Nom d'utilisateur</span> <span className={Array.isArray(errorMessage) && errorMessage[0] === "username" ? "text-red-500" : "hidden"} >{Array.isArray(errorMessage) ? `( ${errorMessage[1]} )` : ""}</span></label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setErrorMessage(null)
                                setVideAnimation(true);
                                setUsername(e.target.value)
                            }}
                            className="p-3 h-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 flex items-center space-x-2"><span>Mots de passe</span> <span className={Array.isArray(errorMessage) && errorMessage[0] === "password" ? "text-red-500" : "hidden"} >{Array.isArray(errorMessage) ? `( ${errorMessage[1]} )` : ""}</span></label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setErrorMessage(null)
                                setVideAnimation(true);
                                setPassword(e.target.value)
                            }}
                            className="p-3 h-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 flex items-center space-x-2"><span>Confirmation du mots de passe</span> <span className={Array.isArray(errorMessage) && errorMessage[0] === "password" ? "text-red-500" : "hidden"} >{Array.isArray(errorMessage) ? `( ${errorMessage[1]} )` : ""}</span></label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setErrorMessage(null)
                                setVideAnimation(true);
                                setConfirmPassword(e.target.value)
                            }}
                            className="p-3 h-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="rounded-full p-[2px]  bg-gradient-to-br from-pink-500 via-pink-500 to-purple-500">
                        <button type="submit" className="w-full bg-white px-6 py-2 rounded-full font-semibold">
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

function setUser(profile: User) {
    throw new Error("Function not implemented.")
}
