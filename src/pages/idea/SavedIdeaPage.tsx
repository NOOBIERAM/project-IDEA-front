import { useEffect, useState } from "react"
import type { Project } from "../../types/Project"
import { Clock, Flame, LucideSquareArrowOutUpRight, Trash2 } from "lucide-react"
import { truncateText } from "../../utils/trucanteText"
import { getColors } from "../../helpers/getColors"
import { moveToTrash, getProjects, searchInProject } from "../../api/project.api"
import DetailModal from "../../components/idea/DetailModal"

const SavedIdeaPage = () => {
    const [ideas, setIdeas] = useState<Project[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedIdea, setSelectedIdea] = useState<Project | null>(null);

    const fetchSavedIdeas = async () => {
        try {
            setIsLoading(true);
            const ideas = await getProjects();
            setIdeas(ideas);
        } catch (error) {
            console.error("-- Error while fetching saved ideas -- ", error)
        } finally {
            setIsLoading(false);
        }
    }
    const handleDelete = async (projectId: string) => {
        try {
            await moveToTrash(projectId);
            setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea.projectId !== projectId));
        } catch (error) {
            console.error("-- Error while moving project to trash -- ", error)
        }
    }
    const handleSearch = async (query: string) => {
        try {
            setIsLoading(true);
            if (query) {
                const data = await searchInProject(query)
                setIdeas(data);
            }
            else {
                fetchSavedIdeas()
            }
        } catch (error) {
            console.error("-- Error while searching in projects -- ", error)
        }
        finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchSavedIdeas()
    }, [])

    return (
        <>
            {
                isLoading && (<div className="loader absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>)
            }
            <section className="max-w-full w-full h-full pt-10 relative">
                <div className="mb-10 px-10 flex justify-between items-center">
                    <h1 className="font-bold text-3xl ">Projet Enregistré  </h1>
                    <input type="text" placeholder="Rechercher..." className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => handleSearch(e.target.value)} />

                </div>
                <div className="flex max-lg:flex-col flex-wrap gap-5 px-5 sm:px-10">
                    {
                        !isLoading && ideas.map((idea, index) => (

                            <div key={index} className={`group transition-all duration-300 ease-out hover:-translate-y-1 bg-white border border-gray-400 shadow-lg hover:${getColors(idea.level).shadow} rounded-xl p-3 max-lg:w-full`}>
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`text-xs font-semibold flex rounded-e-full -translate-x-4  px-5 py-1 ${getColors(idea.level).bg} ${getColors(idea.level).text} ${getColors(idea.level).shadow}`}>
                                        <p className="-translate-x-1">{idea.level}</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100  max-lg:opacity-100 transition-opacity">

                                        <button className="relative group/item flex items-center border rounded-full px-2 py-1  text-gray-500 hover:text-gray-800" onClick={() => handleDelete(idea.projectId)}>

                                            <Trash2 size={18} />
                                            <span className="max-sm:hidden text-xs max-w-0 max-lg:mx-2 max-lg:max-w-full overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/item:mx-2 group-hover/item:max-w-[80px]">
                                                Supprimer
                                            </span>
                                        </button>
                                        <button className="relative group/item flex items-center border rounded-full px-2 py-1  text-gray-500 hover:text-gray-800" onClick={() => setSelectedIdea(idea)}>

                                            <LucideSquareArrowOutUpRight size={18} />

                                            <span className="max-sm:hidden text-xs max-w-0 max-lg:mx-2 max-lg:max-w-full overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/item:mx-2 group-hover/item:max-w-[120px] ">
                                                Plus de détail
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <h2 className="font-semibold text-md mb-2">{idea.name}</h2>
                                <p className="text-xs mb-5 max-sm:hidden ">{truncateText(idea.description, 80)}</p>
                                <p className="text-xs mb-5 lg:hidden  ">{truncateText(idea.description, 150)}</p> {/* sur affichage Mobile */}
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
                {
                    selectedIdea && <DetailModal idea={selectedIdea} onDelete={() => { handleDelete(selectedIdea.projectId) }} onCancel={() => {
                        setSelectedIdea(null)
                    }} />
                }
            </section></>
    )
}

export default SavedIdeaPage