import api from "./axios.config";
import type { AuthLoginDto, AuthLoginResponse, AuthRegisterDto, AuthRegisterResponse } from "../types/Auth";

export const register = async (data: AuthRegisterDto): Promise<AuthRegisterResponse> => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const login = async (data: AuthLoginDto): Promise<AuthLoginResponse> => {
    const res = await api.post("/auth/login", data);
    return res.data;
}

export const refreshToken = async (): Promise<string> => {
    const res = await api.post("/auth/refresh",{});
    return res.data.accessToken;
}

export const signout = async () => {
  await api.post("/auth/logout");
};
