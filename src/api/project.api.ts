import api from "./axios.config";
import type  { Project, ProjectDto } from "../types/Project";

export const createProject = async (data : ProjectDto): Promise<Project> => {
    const res = await api.post("/project", data);
    return res.data;
}

export const getProjects = async (): Promise<Project[]> => {
    const res = await api.get("/project");
    return res.data;
}

export const getProjectsInTrash = async (): Promise<Project[]> => {
    const res = await api.get("/project/trash");
    return res.data;
}

export const getProjectById = async (projectId: string): Promise<Project> => {
    const res = await api.get(`/project/${projectId}`);
    return res.data;
}

export const deleteProject = async (projectId: string): Promise<void> => {
    await api.delete(`/project/${projectId}`);
}

export const moveToTrash = async (projectId: string): Promise<void> => {
    await api.patch(`/project/trash/${projectId}`);
}

export const restoreFromTrash = async (projectId: string): Promise<void> => {
    await api.patch(`/project/restore/${projectId}`);
}