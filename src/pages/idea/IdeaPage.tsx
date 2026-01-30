import { useEffect, useState } from "react";
import { Clock, Flame, LucideSquareArrowOutUpRight, Pin, Settings } from "lucide-react";
import CustomizationPanel from "../../components/idea/CustomizationPanel";
import { getLevelName } from "../../helpers/getLevelName";
import { getColors } from "../../helpers/getColors";
import { truncateText } from "../../utils/trucanteText";
import type { MistralResponse } from "../../types/Mistral";

// TODO: integration API et génération dynamique des idées
const IdeaPage = () => {
    const ideass = [
        {
            name: "To-Do List Application",
            description: "Une application de liste de tâches qui permet aux utilisateurs d'ajouter, supprimer et marquer des tâches comme terminées.",
            duration: "1-2 semaines",
            level: "débutant",
            difficulty_value: 1,
            difficulty_percent: 20,
            tasks: [
                "Créer une interface utilisateur simple",
                "Implémenter les fonctionnalités de base (ajout, suppression, marquage)",
                "Stocker les tâches localement dans le navigateur"
            ],
            features: [
                "Ajout de tâches",
                "Suppression de tâches",
                "Marquer les tâches comme terminées"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ]
        },
        {
            name: "Weather App",
            description: "Une application météo qui affiche les prévisions météorologiques pour une localisation donnée.",
            duration: "2-3 semaines",
            level: "intermédiaire",
            difficulty_value: 2,
            difficulty_percent: 40,
            tasks: [
                "Utiliser une API météo pour obtenir les données",
                "Créer une interface utilisateur réactive",
                "Implémenter la géolocalisation pour obtenir les prévisions de l'utilisateur"
            ],
            features: [
                "Affichage des prévisions météorologiques",
                "Recherche par ville",
                "Géolocalisation automatique"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "API météo (comme OpenWeatherMap)"
            ]
        },
        {
            name: "Personal Finance Tracker",
            description: "Une application qui permet aux utilisateurs de suivre leurs dépenses et revenus.",
            duration: "3-4 semaines",
            level: "intermédiaire",
            difficulty_value: 3,
            difficulty_percent: 60,
            tasks: [
                "Créer une interface utilisateur pour ajouter et visualiser les transactions",
                "Implémenter un système de catégories pour les dépenses",
                "Stocker les données dans une base de données locale ou cloud"
            ],
            features: [
                "Ajout de transactions",
                "Catégorisation des dépenses",
                "Visualisation des dépenses par catégorie"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Firebase ou SQLite"
            ]
        },
        {
            name: "E-commerce Website",
            description: "Un site e-commerce complet avec un panier d'achat et un système de paiement.",
            duration: "4-6 semaines",
            level: "avancé",
            difficulty_value: 4,
            difficulty_percent: 80,
            tasks: [
                "Créer une interface utilisateur pour les produits et le panier",
                "Implémenter un système de gestion des produits",
                "Intégrer un système de paiement sécurisé"
            ],
            features: [
                "Affichage des produits",
                "Panier d'achat",
                "Système de paiement"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "React",
                "Stripe API"
            ]
        },
        {
            name: "Social Media Dashboard",
            description: "Un tableau de bord qui permet aux utilisateurs de gérer leurs comptes de réseaux sociaux.",
            duration: "5-7 semaines",
            level: "avancé",
            difficulty_value: 5,
            difficulty_percent: 100,
            tasks: [
                "Créer une interface utilisateur pour gérer les comptes",
                "Implémenter des intégrations avec les API des réseaux sociaux",
                "Stocker les données des utilisateurs de manière sécurisée"
            ],
            features: [
                "Gestion des comptes de réseaux sociaux",
                "Analyse des performances",
                "Planification des publications"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "React",
                "API des réseaux sociaux (comme Twitter, Facebook)"
            ]
        },
        {
            name: "To-Do List Application",
            description: "Une application de liste de tâches qui permet aux utilisateurs d'ajouter, supprimer et marquer des tâches comme terminées.",
            duration: "1-2 semaines",
            level: "débutant",
            difficulty_value: 1,
            difficulty_percent: 20,
            tasks: [
                "Créer une interface utilisateur simple",
                "Implémenter les fonctionnalités de base (ajout, suppression, marquage)",
                "Stocker les tâches localement dans le navigateur"
            ],
            features: [
                "Ajout de tâches",
                "Suppression de tâches",
                "Marquer les tâches comme terminées"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ]
        },
        {
            name: "Weather App",
            description: "Une application météo qui affiche les prévisions météorologiques pour une localisation donnée.",
            duration: "2-3 semaines",
            level: "intermédiaire",
            difficulty_value: 2,
            difficulty_percent: 40,
            tasks: [
                "Utiliser une API météo pour obtenir les données",
                "Créer une interface utilisateur réactive",
                "Implémenter la géolocalisation pour obtenir les prévisions de l'utilisateur"
            ],
            features: [
                "Affichage des prévisions météorologiques",
                "Recherche par ville",
                "Géolocalisation automatique"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "API météo (comme OpenWeatherMap)"
            ]
        },
        {
            name: "Personal Finance Tracker",
            description: "Une application qui permet aux utilisateurs de suivre leurs dépenses et revenus.",
            duration: "3-4 semaines",
            level: "intermédiaire",
            difficulty_value: 3,
            difficulty_percent: 60,
            tasks: [
                "Créer une interface utilisateur pour ajouter et visualiser les transactions",
                "Implémenter un système de catégories pour les dépenses",
                "Stocker les données dans une base de données locale ou cloud"
            ],
            features: [
                "Ajout de transactions",
                "Catégorisation des dépenses",
                "Visualisation des dépenses par catégorie"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Firebase ou SQLite"
            ]
        },
        {
            name: "E-commerce Website",
            description: "Un site e-commerce complet avec un panier d'achat et un système de paiement.",
            duration: "4-6 semaines",
            level: "avancé",
            difficulty_value: 4,
            difficulty_percent: 80,
            tasks: [
                "Créer une interface utilisateur pour les produits et le panier",
                "Implémenter un système de gestion des produits",
                "Intégrer un système de paiement sécurisé"
            ],
            features: [
                "Affichage des produits",
                "Panier d'achat",
                "Système de paiement"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "React",
                "Stripe API"
            ]
        },
        {
            name: "Social Media Dashboard",
            description: "Un tableau de bord qui permet aux utilisateurs de gérer leurs comptes de réseaux sociaux.",
            duration: "5-7 semaines",
            level: "avancé",
            difficulty_value: 5,
            difficulty_percent: 100,
            tasks: [
                "Créer une interface utilisateur pour gérer les comptes",
                "Implémenter des intégrations avec les API des réseaux sociaux",
                "Stocker les données des utilisateurs de manière sécurisée"
            ],
            features: [
                "Gestion des comptes de réseaux sociaux",
                "Analyse des performances",
                "Planification des publications"
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "React",
                "API des réseaux sociaux (comme Twitter, Facebook)"
            ]
        }
    ]
    const [ideas, setIdeas] = useState<MistralResponse[]>([])

    const [showCustomoization, setShowCustomization] = useState(false);

    const [ideaText, setIdeaText] = useState("")
    const [count, setCount] = useState(1);
    const [levelCount, setLevelCount] = useState(1);
    const [level, setLevel] = useState("débutant")

    useEffect(() => {
        setLevel(getLevelName(levelCount))
    }, [levelCount])

   

    return <div className="flex h-full w-full">
        <section className="max-w-full w-full pt-10">
            <h1 className="font-bold text-3xl mb-10 px-10">Idées De Projet  </h1>
            <div className="flex max-lg:flex-col flex-wrap gap-5 px-5 sm:px-10">
                {
                    ideas.map((idea, index) => (
                        <div key={index} className={`group transition-all duration-300 ease-out hover:-translate-y-1 bg-white border border-gray-400 shadow-lg hover:shadow-${getColors(idea.level)}-100 rounded-xl p-3 max-lg:w-full`}>
                            <div className="flex items-center justify-between mb-3">
                                <div className={`text-xs font-semibold flex rounded-e-full -translate-x-4  px-5 py-1 ${getColors(idea.level).bg} ${getColors(idea.level).text} ${getColors(idea.level).shadow}`}>
                                    <p className="-translate-x-1">{idea.level}</p>
                                </div>
                                <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100  max-lg:opacity-100 transition-opacity">

                                    <button className="relative group/item flex items-center border rounded-full px-2 py-1  text-gray-500 hover:text-gray-800">

                                        <Pin size={18} />

                                        <span className="max-sm:hidden text-xs max-w-0 max-lg:mx-2 max-lg:max-w-full overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/item:mx-2 group-hover/item:max-w-[80px]">
                                            Épingler
                                        </span>
                                    </button>
                                    <button className="relative group/item flex items-center border rounded-full px-2 py-1  text-gray-500 hover:text-gray-800">

                                        <LucideSquareArrowOutUpRight size={18} />

                                        <span className="max-sm:hidden text-xs max-w-0 max-lg:mx-2 max-lg:max-w-full overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/item:mx-2 group-hover/item:max-w-[120px] ">
                                            Plus de détail
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <h2 className="font-semibold text-md mb-2">{idea.name}</h2>
                            <p className="text-xs mb-5">{truncateText(idea.description, 150)}</p>
                            <div className="flex items-center justify-start space-x-3 ">
                                <div className="bg-gray-100 rounded-full py-1 px-3 flex items-center space-x-2 text-gray-700">
                                    <Clock size={18} className="text-black" />
                                    <p className="text-xs">{idea.duration}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full py-1 px-3 flex items-center space-x-2 text-gray-700">
                                    <Flame size={18} className="text-orange-500" />
                                    <p className="text-xs">{idea.difficulty_percent}%</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
        <aside className="max-lg:hidden min-w-90 h-full border-l border-black/10 pt-10 px-10">
            <h3 className="text-xl font-semibold flex items-center space-x-4 mb-10 h-[36px]"><Settings size={24} /> <span>Personalisation</span></h3>
            <CustomizationPanel
                ideaText={ideaText}
                setIdeaText={setIdeaText}
                levelCount={levelCount}
                setLevelCount={setLevelCount}
                count={count}
                setCount={setCount}
                onGenerate={() => { }}
            />
        </aside>
        <div
            className={`lg:hidden fixed z-50 bottom-4 right-4 shadow-lg p-[2px] rounded-xl bg-gradient-to-br from-pink-500 via-pink-500 to-purple-500 }`}
        >
            <button
                type="button"
                onClick={() => setShowCustomization(!showCustomoization)}
                className="w-10 h-10 rounded-xl  bg-white backdrop-blur-lg flex items-center justify-center"
            >
                <Settings className="w-5 text-gray-600 rotate-[-45deg]" />
            </button>

        </div>
        {showCustomoization && (
            <div className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl p-5 w-full max-w-md shadow-lg relative">

                    {/* Bouton Close */}
                    <button
                        className="absolute top-3 right-3 text-gray-600 hover:text-black"
                        onClick={() => setShowCustomization(false)}
                    >
                        ✕
                    </button>

                    <h3 className="text-xl font-semibold flex items-center space-x-4 mb-10 h-[36px]"><Settings size={24} /> <span>Personalisation</span></h3>

                    <CustomizationPanel
                        ideaText={ideaText}
                        setIdeaText={setIdeaText}
                        levelCount={levelCount}
                        setLevelCount={setLevelCount}
                        count={count}
                        setCount={setCount}
                        onGenerate={() => {
                            setShowCustomization(false)
                        }}
                    />
                </div>
            </div>
        )}

    </div>
}
export default IdeaPage