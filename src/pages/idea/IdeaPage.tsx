import { useState } from "react";
import { getColors, truncateText } from "../../utils/utils"
import { Clock, Flame, LucideSquareArrowOutUpRight, Pin, Settings } from "lucide-react";


const IdeaPage = () => {

    const ideas = [
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

    const [count, setCount] = useState(1);

    return <div className="flex h-full w-full">
        <section className="max-w-full w-full pt-10">
            <h1 className="font-bold text-3xl mb-10 px-10">Idées De Projet  </h1>
            <div className="flex flex-wrap gap-5 px-10">
                {
                    ideas.map((idea, index) => (
                        <div key={index} className="bg-white border border-gray-400 shadow-sm rounded-xl p-3 ">
                            <div className="flex items-center justify-between mb-3">
                                <div className={`text-xs font-semibold rounded-e-full -translate-x-4  px-5 py-1 ${getColors(idea.level)}`}>
                                    <p className="-translate-x-1">{idea.level}</p>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <Pin size={18} className="text-gray-500 hover:text-gray-800" />
                                    <LucideSquareArrowOutUpRight size={18} className="text-gray-500 hover:text-gray-800" />
                                </div>
                            </div>
                            <h2 className="font-semibold text-md mb-2">{idea.name}</h2>
                            <p className="text-xs mb-5">{truncateText(idea.description, 150)}</p>
                            <div className="flex items-center justify-start space-x-3">
                                <div className="bg-gray-100 rounded-full py-1 px-3 flex items-center space-x-2">
                                    <Clock size={18} className="text-gray-500" />
                                    <p className="text-xs text-black">{idea.duration}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full py-1 px-3 flex items-center space-x-2">
                                    <Flame size={18} className="text-gray-500" />
                                    <p className="text-xs text-black">{idea.difficulty_percent}%</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
        

    </div>
}

export default IdeaPage