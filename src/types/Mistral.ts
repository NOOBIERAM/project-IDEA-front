import type { LevelType } from "./Level";
import type { Project } from "./Project";

export interface MistralResponse extends Omit<Project, 'trash' | 'userId' | 'createdAt' | 'projectId'> {}


export interface MistralDto {
    description?: string
    level: LevelType
    // lang: 'fr' | 'en'
    count: number
}