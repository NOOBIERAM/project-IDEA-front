import api from "./axios.config";
import type { MistralResponse, MistralDto } from "../types/Mistral"

export const getIdeaByMistral = async (dto :MistralDto): Promise<MistralResponse[]> => {
    const res = await api.post('/mistral', dto);
    return res.data;
}