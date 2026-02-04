import GradientButton from "../shared/GradientButton";

interface CustomizationPanelProps {
  count: number;
  setCount: (value: number) => void;
  ideaText: string;
  setIdeaText: (value: string) => void;
  levelCount: number;
  setLevelCount: (value: number) => void;
  onGenerate: () => void;
  isLoading?: boolean;
}


const CustomizationPanel = ({ ideaText, setIdeaText, levelCount, setLevelCount,count, setCount, onGenerate, isLoading=false }: CustomizationPanelProps) => {
    
    return (
        <div className="bg-white rounded-xl lg:p-4 mt-5 lg:border border-gray-400 lg:shadow-lg space-y-8 ld:space-y-4 flex flex-col">

            <textarea
                className="w-full border border-dashed border-gray-500 rounded-lg p-3 min-h-40 focus:ring-2 focus:ring-gray-500 focus:outline-none resize-none"
                placeholder="Exemple: Projet intégrant l'assistance d'un IA"
                value={ideaText}
                onChange={(e) => setIdeaText(e.target.value)}
            ></textarea>

            <div className="">
                <label className="flex justify-between text-sm text-gray-700 mt-1">
                    <span>Aléatoire</span>
                    <span>Débutant</span>
                    <span>Intermédiaire</span>
                    <span>Avancé</span>
                </label>
                <input
                    type="range"
                    min="0"
                    max="3"
                    value={levelCount}
                    onChange={(e) => setLevelCount(parseInt(e.target.value))}
                    className="input-range w-full"
                />
            </div>

            <div className="">
                <label className="text-sm text-gray-700">
                    idée à générer <span className="font-semibold">{count}</span>
                </label>

                <input
                    type="range"
                    min="1"
                    max="10"
                    value={count}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                    className="input-range w-full"
                />
            </div>

            <GradientButton w1_full={true} className="py-2 text-sm" onClick={onGenerate} isDisable={isLoading}>
                Générer des idées
            </GradientButton>
        </div>
    );
};

export default CustomizationPanel;
