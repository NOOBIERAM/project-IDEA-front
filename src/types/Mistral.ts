import type { Project } from "./Project";

export interface MistralResponse extends Omit<Project, 'trash' | 'userId' | 'createdAt' | 'projectId'> {}


export interface MistralDto {
    description?: string
    level: 'aléatoire' | 'débutant' | 'intermédiaire' | 'avancé'
    // lang: 'fr' | 'en'
    count: number
}