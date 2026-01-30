export interface Project {
    projectId: string;
    name: string;
    description: string;
    duration: string;
    level: 'débutant' | 'intermédiaire' | 'avancé';
    difficulty_value: number;
    difficulty_percent: number;
    tasks: string[];
    features: string[];
    technologies: string[];
    trash: boolean;
    userId: string;
    createdAt: string; 
}

export interface ProjectDto extends Partial<Project> {}
