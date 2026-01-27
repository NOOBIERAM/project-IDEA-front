import { useState, useEffect } from "react";
import hero from "../assets/hero.webp";
import { ArrowRight, Braces, Brain, ChevronDown, Code2, Lightbulb, Target, GraduationCap, SquareUserRound, Zap } from 'lucide-react';
import ScrollTop from "../components/ScrollTop";
import Navbar from "../components/Navbar";
import { scrollToSection } from "../utils/utils";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";

const about = [
    {
        icon: Brain,
        title: "IA Personnalisée",
        description: "Grâce à une intelligence artificielle spécialisée, nous générons des idées de projets adaptées à ton niveau."
    },
    {
        icon: Target,
        title: "Idées Adaptées",
        description: "Des idées réalistes selon votre niveau de compétence, du débutant au développeur expérimenté."
    },
    {
        icon: Braces,
        title: 'Stack & Tech',
        description: 'Idées pour frontend, backend, mobile, IA, et bien plus'
    },
    {
        icon: Lightbulb,
        title: 'Inspiration Continue',
        description: 'Chaque génération vous propose des idées inédites et toujours renouvelées.'
    }
]

const cibles = [
    {
        icon: Zap,
        title: "Autodidactes",
        description: "Apprends en construisant de vrais projets, sans rester bloqué à chercher des idées."
    },
    {
        icon: Code2,
        title: "Développeurs",
        description: "Génère des projets adaptés à ton stack pour renforcer tes compétences techniques."
    },
    {
        icon: SquareUserRound,
        title: "Portfolio",
        description: "Construis des projets pertinents pour enrichir ton portfolio et te démarquer."
    },
    {
        icon: GraduationCap,
        title: "Bootcamp learners",
        description: "Des idées guidées pour t’entraîner entre les cours et consolider tes acquis."
    },
];


const MainPage = () => {
    const navigate = useNavigate()
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return <>
        <Background />
        <Navbar />
        <section id="acceuil" className="min-h-screen flex flex-col justify-center px-[2%]">
            <div className="xl:grid xl:grid-cols-2 gap-12">
                <div className="flex flex-col text-center xl:text-start justify-center ">
                    <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
                        Trouve votre prochaine idée avec{' '}
                        <br />
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            Project-IDEA
                        </span>
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start mt-15 pl-2.5 max-sm:px-15 font-semibold">
                        <button className="px-6 py-3 border-2 rounded-full hover:scale-105 transition-transform duration-300">
                            Générer une idée
                        </button>
                        <div className="rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-pink-500 to-purple-500 hover:scale-105 transition-transform duration-300">
                            <button className="bg-white px-6 py-3 rounded-full w-full hover:scale-99 transition-transform duration-300" onClick={()=> navigate("/login")}>
                                Commencer
                            </button>
                        </div>
                    </div>
                </div>
                {/* xl:flex flex-col */}
                <div className="hidden xl:flex items-end justify-end">
                    <img src={hero} alt="Hero" className="h-[90%]" />
                </div>
            </div>
            <div className={`flex items-center justify-center transition-all duration-500 ${!isScrolled ? "opacity-100" : "opacity-0"}`}>
                <button onClick={() => scrollToSection("apropos")} >
                    <ChevronDown size={30} className="animate-bounce translate-y-30" />
                    <ChevronDown size={30} className="animate-bounce translate-y-25" />
                    <ChevronDown size={30} className="animate-bounce translate-y-20" />
                </button>
            </div>
        </section>
        <section id="apropos" className="flex flex-col justify-center lg:px-[2%] px-[10%] mb-30">
            <div className="xl:grid xl:grid-cols-2 gap-12">

                <div className="flex flex-col text-center lg:text-start max-lg:items-center justify-start mb-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 via to-cyan-400 bg-clip-text text-transparent mb-5">
                        A propos
                    </h1>
                    {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 bg-gradient-to-b from-white via-white to-purple-400 bg-clip-text text-transparent opacity-40 translate-y-[-60px] translate-x-5">
                        A propos
                    </h1> */}
                    <div className="max-w-[400px] max-lg:max-w-full ">
                        Une plateforme conçue pour aider les développeurs à transformer une simple envie de coder en un projet concret.
                    </div>
                </div>
                <div className="flex flex-col  items-start justify-start">
                    <div className="sm:grid grid-cols-2 gap-12">
                        {about.map((item, index) => (
                            <div key={index} className="flex flex-col items-start sm:mb-15 mb-10 max-sm:border-l-3 border-purple-100 max-sm:p-3 max-sm:py-2">
                                <div className="flex sm:flex-col sm:items-start items-center max-lg:mb-5 mb-10">
                                    <span className="flex items-center justify-center bg-purple-100 p-3 rounded-xl max-sm:me-5 sm:mb-5">
                                        <item.icon className="w-12 h-12 max-lg:w-8 max-lg:h-8 text-purple-500" />
                                    </span>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 ">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
        <section id="cible" className="flex flex-col justify-center items-center lg:px-[2%] px-[10%] mb-60">

            <div className="flex flex-col text-center lg:text-start max-lg:items-center justify-start mb-20">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 via to-cyan-400 bg-clip-text text-transparent">
                    Pour qui ?
                </h1>
            </div>
            <div className="max-sm:max-w-[270px] max-sm:flex lg:flex max-sm:flex-col sm:grid max-lg:grid grid-cols-2 gap-8 items-center justify-center mx-auto">
                {cibles.map((item, index) => (
                    <div
                        key={index}
                        className={`max-sm:border-b-2 sm:border-2 border-purple-100 max-sm:rounded-bl-xl sm:rounded-xl p-3 max-sm:ps-0 ${openIndex === index ? "max-sm:pt-0" : "max-sm:py-0"}`}
                    >
                        <div
                            className="flex items-center space-x-5 sm:mb-5 cursor-pointer"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <span className="flex items-center justify-center bg-purple-100 p-3 rounded-xl">
                                <item.icon className="w-8 h-8 text-purple-500" />
                            </span>

                            <h3 className="text-xl md:text-2xl font-bold">
                                {item.title}
                            </h3>

                            <ChevronDown
                                className={`ml-auto max-sm:block hidden transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                        <p className="text-gray-600 max-sm:hidden">
                            {item.description}
                        </p>
                        {/* {openIndex === index && (
                            <p className="text-gray-600 sm:hidden mt-5 text-center ">
                                {item.description}
                            </p>
                        )} */}
                        <div
                            className={`
                                sm:hidden overflow-hidden transition-all duration-300 ease-in-out
                                ${openIndex === index ? "max-h-40 opacity-100 mt-5" : "max-h-0 opacity-0"}
                            `}
                        >
                            <p className="text-gray-600 text-center">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
        <section id="commencer" className="w-full lg:px-[5%] px-[10%] mb-30">
            <div className="w-full h-[380px] p-3 bg-gradient-to-tr from-purple-400 via-pink-300 to-cyan-400 rounded-3xl">
                <div className="bg-white/30 w-full h-full rounded-3xl backdrop-blur-3xl p-10 flex flex-col max-sm:items-center items-start justify-between ">
                    <h1 className="text-6xl max-sm:text-4xl font-semibold text-white">
                        Prêt à <br /> construire un vrai projet ?
                    </h1>

                    <button className="px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 flex items-center space-x-5 bg-white font-semibold">
                        <span>Commencer</span>
                        <ArrowRight size={20} className="translate-y-[2px]" />
                    </button>
                </div>
            </div>

        </section>
        <section id="footer" className="w-full lg:px-[5%] px-[10%] mb-30">
            <div id="copyright" className=" border-gray-800 text-center">
                <p>© 2026 Project-IDEA - RoutsGG - NOOBIERAM.</p>
            </div>
        </section>
        <ScrollTop />

    </>
}

export default MainPage