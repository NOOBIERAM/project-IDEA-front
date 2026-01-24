import api from "./axios.config";
import type { User } from "../types/User";

export const getUserProfile = async (): Promise<User> => {
    const res = await api.get("/user");
    return res.data;
}