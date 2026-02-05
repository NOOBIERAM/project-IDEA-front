import { useContext, useEffect, useState } from "react"
import { ArrowLeft, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { login } from "../../api/auth.api"
import { getUserProfile } from "../../api/user.api"
import loginAnim from "../../assets/animations/loginAnim.webm"
import croixAnim from "../../assets/animations/croix.webm"
import GradientButton from "../../components/shared/GradientButton"


const LoginPage = () => {
    const navigate = useNavigate()
    const [videAnimation, setVideAnimation] = useState(true);
    const [username, setUsername] = useState(import.meta.env.VITE_MOCK_USERNAME || "")
    const [password, setPassword] = useState(import.meta.env.VITE_MOCK_PASSWORD || "")
    const { user,setUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState< string[] | null>(null);
    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            await login({ username, password });
            const profile = await getUserProfile();
            setUser(profile);
            navigate("/idea");
        } catch (error: any) {
            setVideAnimation(false);
            if (error.response) {
                const message = error.response.data.message;

                if (message === "Invalid password") {
                    setErrorMessage(["password", "incorrècte"]);
                } else if (message === "User not found") {
                    setErrorMessage(["username","n'existe pas"]);
                } else {
                    console.error("❌ Erreur inconnue :", message);
                }
            } else {
                console.error("Erreur réseau ou serveur :", error);
            }
        }
    };
    useEffect(() => {
        if (user) {
            navigate("/idea");
        }
    }, [user, navigate])
    
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
                    <video
                        autoPlay
                        loop
                        muted
                        src={videAnimation ? loginAnim : croixAnim}
                        className={`${videAnimation ? "w-90" : "w-60"}`}
                    />

                </div>
            </div>
            <form className="p-13 rounded-3xl flex flex-col space-y-12" onSubmit={handleLogin}>
                <h1 className="text-3xl font-bold text-center">
                    Connectez-vous à votre compte
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
                            }
                            }
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
                </div>

                <div className="flex flex-col ">
                    <GradientButton type="submit" className="py-2">
                        Se connecter
                    </GradientButton>
                    <a href="/#/register" className="text-center text-sm mt-3 underline underline-offset-4">Pas de compte ? Inscrivez-vous</a>
                </div>

            </form>
        </div>

    </section>
}
export default LoginPage