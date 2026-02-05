import type { ConcreteLevel } from "./Level";

export interface Project {
    projectId: string;
    name: string;
    description: string;
    duration: string;
    level: ConcreteLevel;
    difficulty_percent: string;
    tasks: string[];
    features: string[];
    technologies: string[];
    trash: boolean;
    userId: string;
    createdAt: string; 
}

export interface ProjectDto extends Partial<Project> {}
