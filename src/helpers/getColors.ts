export const getColors = (level: "débutant" | "intermédiaire" | "avancé") => {
    const colorMap = {
        débutant: { bg: "bg-cyan-100", text: "text-cyan-500", shadow: "shadow-cyan-200" },
        intermédiaire: { bg: "bg-pink-100", text: "text-pink-500", shadow: "shadow-pink-200" },
        avancé: { bg: "bg-purple-100", text: "text-purple-500", shadow: "shadow-purple-200" }
    };
    return colorMap[level as keyof typeof colorMap];
};