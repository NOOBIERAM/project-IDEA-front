import api from "./axios.config";

export const keepAlive = async (): Promise<void> => {
  await api.get("/health");
}