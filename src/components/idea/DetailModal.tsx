import { Clock, Flame, Save, X, Lightbulb, Trash2 } from "lucide-react";
import { getColors } from "../../helpers/getColors";
import type { Project } from "../../types/Project";

interface DetailModalProps {
    onSave?: () => void;
    onDelete?: () => void;
    onCancel: () => void;
    idea: Partial<Project>
}

const DetailModal = ({ idea, onSave, onDelete, onCancel }: DetailModalProps) => {
    return (
        <div className="absolute top-0 h-full w-full flex items-center justify-center z-1 bg-black/5 backdrop-blur-[1px]" onClick={onCancel}>
            <div className="bg-white p-10 rounded-xl shadow-xl relative">
                <div className="absolute flex items-center top-3 right-3 ">
                    { onSave &&
                        <button className="relative group flex items-center  rounded-full px-2 py-1  text-gray-500 hover:text-gray-800 hover:border hover:font-medium" onClick={onSave}>

                            <Save size={23} />

                            <span className="text-sm max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:mx-2 group-hover:max-w-[80px]">
                                Enregistrer
                            </span>
                        </button>
                    }
                    { onDelete &&
                        <button className="relative group flex items-center  rounded-full px-2 py-1  text-gray-500 hover:text-gray-800 hover:border hover:font-medium" onClick={onDelete}>

                            <Trash2 size={23} />

                            <span className="text-sm max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:mx-2 group-hover:max-w-[80px]">
                                Supprimer
                            </span>
                        </button>
                    }

                    <button className="text-gray-500 hover:text-red-400 flex items-center justify-center  rounded-full" onClick={onCancel}><X size={23} /></button>
                </div>
                <div className=" rounded-xl">
                    <h1 className="text-3xl font-semibold flex items-center space-x-3"><Lightbulb className="text-yellow-400" size={35} /><span>{idea.name}</span></h1>
                    <p className="mt-5">" {idea.description} "</p>
                    <div className="flex items-center space-x-3 mt-10">
                        <h3 className="font-semibold">Niveau : </h3>
                        <p className={`text-sm p-1 px-2 rounded-full ${idea.level == "débutant" ? getColors(idea.level).bg + " " + getColors(idea.level).text + " font-semibold" : "bg-gray-100 text-gray-400"}`}>Débutant</p>
                        <p className={`text-sm p-1 px-2 rounded-full ${idea.level == "intermédiaire" ? getColors(idea.level).bg + " " + getColors(idea.level).text + " font-semibold" : "bg-gray-100 text-gray-400"}`}>Intermédiaire</p>
                        <p className={`text-sm p-1 px-2 rounded-full ${idea.level == "avancé" ? getColors(idea.level).bg + " " + getColors(idea.level).text + " font-semibold" : "bg-gray-100 text-gray-400"}`}>Avancé</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-3">
                        <h3 className="font-semibold">Difficulté : </h3>
                        <div className="bg-gray-100 rounded-full py-1 px-2 flex items-center space-x-2 text-gray-700">
                            <Flame size={18} className="text-orange-500" />
                            <p className="text-sm">{idea.difficulty_percent}%</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-3">
                        <h3 className="font-semibold">Durée : </h3>
                        <div className="bg-gray-100 rounded-full py-1 px-2 flex items-center space-x-2 text-gray-700">
                            <Clock size={18} className="text-black" />
                            <p className="text-sm">{idea.duration}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold">Technologies : </h3>
                        <ul className="flex items-center justify-start ms-4  mt-4 gap-5 flex-wrap max-w-100">
                            {idea.technologies?.map((technology, index) => (
                                <li key={index} className="text-sm font-semibold p-1 px-2 bg-gray-100 rounded-full">{technology}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                        <div>
                            <h3 className="font-semibold">Fonctionnalités : </h3>
                            <ul className="list-disc list-inside mt-2 ms-4">
                                {idea.features?.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Tâches à faire : </h3>
                            <ul className="list-disc list-inside mt-2 ms-4">
                                {idea.tasks?.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailModal