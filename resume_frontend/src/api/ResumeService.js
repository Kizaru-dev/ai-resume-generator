import axios from "axios";


export const baseURLL = "http://localhost:8080/api/v1";

export const axiosIntance = axios.create({
    baseURL: baseURLL,
    headers: {
        "Content-Type": "application/json",
    },
});


export const generateResume = async (description) => {
    const response = await axiosIntance.post("/resume/generate", { userDescription: description });
    return response.data;
};