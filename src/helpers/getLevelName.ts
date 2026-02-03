import type { LevelType } from "../types/Level";

export const getLevelName = (value: number): LevelType => {
    const map: Record<number, LevelType> = {
        0: "aléatoire",
        1: "débutant",
        2: "intermédiaire",
        3: "avancé"
    };
    return map[value];
};