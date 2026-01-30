export const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -150; // hauteur navbar
    const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
};

export const getColors = (level: string) => {
    const colorMap = {
        débutant: { bg: "bg-cyan-100", text: "text-cyan-500", shadow: "shadow-cyan-200" },
        intermédiaire: { bg: "bg-pink-100", text: "text-pink-500", shadow: "shadow-pink-200" },
        avancé: { bg: "bg-purple-100", text: "text-purple-500", shadow: "shadow-purple-200" }
    };
    return colorMap[level as keyof typeof colorMap];

};

export const getLevelName = (value: number): string => {
    const map: Record<number, string> = {
        1: "débutant",
        2: "intermédiaire",
        3: "avancé"
    };

    return map[value];
};


export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;

    // On coupe à la limite
    const truncated = text.slice(0, maxLength);

    // On retire la dernière partie du mot coupé
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex === -1) return text.slice(0, maxLength) + "...";

    return truncated.slice(0, lastSpaceIndex) + "...";
}
