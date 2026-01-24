export interface Project {
    projectId: string;
    name: string;
    description: string;
    duration: string;
    tasks: string[];
    features: string[];
    technologies: string[];
    trash: boolean;
    userId: string;
    createdAt: string; 
}

export interface ProjectDto extends Partial<Project> {}
