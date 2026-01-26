import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/utils";

const Navbar = () => {
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
                fixed top-0 z-30 max-w-[1400px] w-full h-16
                flex items-center justify-between
                transition-all duration-300
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
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-pink-500 to-purple-500">
                        <button className="bg-white px-6 py-2 rounded-full">
                            S'inscrire
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
