export const getLevelName = (value: number): string => {
    const map: Record<number, string> = {
        0: "aléatoire",
        1: "débutant",
        2: "intermédiaire",
        3: "avancé"
    };
    return map[value];
};