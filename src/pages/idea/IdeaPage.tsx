import { useEffect, useState } from "react";
import { Clock, Flame, LucideSquareArrowOutUpRight, Save, Settings } from "lucide-react";
import CustomizationPanel from "../../components/idea/CustomizationPanel";
import { getLevelName } from "../../helpers/getLevelName";
import { getColors } from "../../helpers/getColors";
import { truncateText } from "../../utils/trucanteText";
import type { MistralResponse } from "../../types/Mistral";
import { getIdeaByMistral } from "../../api/mistral.api";
import type { LevelType } from "../../types/Level";
import DetailModal from "../../components/shared/DetailModal";
import { createProject } from "../../api/project.api";
import type { ProjectDto } from "../../types/Project";

const IdeaPage = () => {

    const [ideas, setIdeas] = useState<MistralResponse[]>([])

    const [showCustomoization, setShowCustomization] = useState(false);

    const [ideaText, setIdeaText] = useState("")
    const [levelCount, setLevelCount] = useState(0);
    const [level, setLevel] = useState<LevelType>("aléatoire")
    const [count, setCount] = useState(10);
    const [isLoading, setIsLoading] = useState(false)
    const [saveLoading, setSaveLoading] = useState(false)
    const [selectedIdea, setSelectedIdea] = useState<MistralResponse | null>(null);

    useEffect(() => {
        setLevel(getLevelName(levelCount))
    }, [levelCount])

    const fetchIdeas = async () => {
        try {
            setIsLoading(true);
            const newIdeas = await getIdeaByMistral({
                description: ideaText,
                level: level,
                count: count
            });
            setIdeas(newIdeas);
        } catch (error) {
            console.error("-- Error while fetching ideas by mistral (IdeaPage.tsx)-- ", error)
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchIdeas()
    }, [])

    const handleSaveIdea = async (idea: ProjectDto) => {
        try {
            setSaveLoading(true);
            await createProject(idea)
            setIdeas((prevIdeas) => prevIdeas.filter((i) => i !== idea));
        } catch (error) {
            console.error("-- Error while saving project idea -- ", error)
        } finally {
            setSaveLoading(false);
        }
    }

    return <div className="flex h-full w-full">
        <section className="max-w-full w-full pt-10 relative">
            <h1 className="font-bold text-3xl mb-10 px-10">Idées De Projet  </h1>

            {
                isLoading && (<div className="loader absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-20"></div>)
            }
            <div className="flex max-lg:flex-col flex-wrap gap-5 px-5 sm:px-10">
                {
                    !isLoading && ideas.map((idea, index) => (

                        <div key={index} className={`group transition-all duration-300 ease-out hover:-translate-y-1 bg-white border border-gray-400 shadow-lg hover:${getColors(idea.level).shadow} rounded-xl p-3 max-lg:w-full`}>
                            <div className="flex items-center justify-between mb-3">
                                <div className={`text-xs font-semibold flex rounded-e-full -translate-x-4  px-5 py-1 ${getColors(idea.level).bg} ${getColors(idea.level).text} ${getColors(idea.level).shadow}`}>
                                    <p className="-translate-x-1">{idea.level}</p>
                                </div>
                                <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100  max-lg:opacity-100 transition-opacity">

                                    <button className="relative group/item flex items-center border rounded-full px-2 py-1  text-gray-500 hover:text-gray-800" onClick={() => handleSaveIdea(idea)}>

                                        {
                                            saveLoading ? (
                                                <div className="btn-loader mx-auto"></div>
                                            ) : (
                                                <>
                                                    <Save size={18} />
                                                    <span className="max-sm:hidden text-xs max-w-0 max-lg:mx-2 max-lg:max-w-full overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/item:mx-2 group-hover/item:max-w-[80px]">
                                                        Enregistrer
                                                    </span></>
                                            )
                                        }
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
        </section>
        <aside className="max-lg:hidden min-w-100 h-full border-l border-black/10 pt-10 px-10">
            <h3 className="text-xl font-semibold flex items-center space-x-4 mb-10 h-[36px]"><Settings size={24} /> <span>Personalisation</span></h3>
            <CustomizationPanel
                isLoading={isLoading}
                ideaText={ideaText}
                setIdeaText={setIdeaText}
                levelCount={levelCount}
                setLevelCount={setLevelCount}
                count={count}
                setCount={setCount}
                onGenerate={() => { fetchIdeas() }}
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
                        isLoading={isLoading}
                        ideaText={ideaText}
                        setIdeaText={setIdeaText}
                        levelCount={levelCount}
                        setLevelCount={setLevelCount}
                        count={count}
                        setCount={setCount}
                        onGenerate={() => {
                            setShowCustomization(false)
                            fetchIdeas()
                        }}
                    />
                </div>
            </div>
        )}
        {
            selectedIdea && <DetailModal idea={selectedIdea} onSave={() => { handleSaveIdea(selectedIdea) }} onCancel={() => {
                setSelectedIdea(null)
            }} />
        }
    </div>
}
export default IdeaPage