import axios from "axios";


// Use the deployed backend URL from environment variables, fallback to localhost for local dev
export const baseURLL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1";

export const axiosIntance = axios.create({
    baseURL: baseURLL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 60000, // 60 seconds - AI generation can take time
});


export const generateResume = async (description) => {
    const response = await axiosIntance.post("/resume/generate", { userDescription: description });
    return response.data;
};