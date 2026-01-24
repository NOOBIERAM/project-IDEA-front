import api from "./axios.config";
import type { UserResponse } from "../types/User";

export const getUserProfile = async (): Promise<UserResponse> => {
    const res = await api.get("/user");
    return res.data;
}