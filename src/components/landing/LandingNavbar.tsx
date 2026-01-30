import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GradientButton from "../shared/GradientButton";
import { scrollToSection } from "../../helpers/scrollToSection";

const LandingNavbar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [selectedLink, setSelectedLink] = useState('acceuil'); // Placeholder for future use

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setSelectedLink(id);
        scrollToSection(id)
    };

    return (
        <nav
            className={`
                max-sm:hidden
                fixed top-0 z-30 max-w-[1400px] w-full h-16
                flex items-center justify-between
                transition-all duration-300 rounded-b-xl
                ${scrolled
                    ? "bg-white/70 backdrop-blur-xl"
                    : "bg-transparent"
                }
            `}
        >
            <div className="border-2 p-3 rounded-lg">
                <button className=" font-bold" onClick={() => scrollTo("acceuil")}>
                    Project-IDEA
                </button>
            </div>

            <ul className="flex items-center space-x-10 font-bold">
                <li>
                    <button onClick={() => scrollTo("acceuil")} className={`uppercase ${selectedLink === "acceuil" ? "" : "text-gray-500"}`}>
                        Accueil
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollTo("apropos")} className={`uppercase ${selectedLink === "apropos" ? "" : "text-gray-500"}`}>
                        À propos
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollTo("cible")} className={`uppercase ${selectedLink === "cible" ? "" : "text-gray-500"}`}>
                        Cibles
                    </button>
                </li>
                <li>
                    <GradientButton onClick={() => navigate("/register")} className="py-2">
                        S'inscrire
                    </GradientButton>
                </li>
            </ul>
        </nav>
    );
};

export default LandingNavbar;
