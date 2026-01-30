export type LevelType = "aléatoire" | "débutant" | "intermédiaire" | "avancé";
export type ConcreteLevel = Exclude<LevelType, "aléatoire">;