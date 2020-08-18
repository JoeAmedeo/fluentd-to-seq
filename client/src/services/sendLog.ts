import * as axios from "axios";

const url = process.env.LOG_SERVICE_URL;
const defaultAxios = axios.default;

export const sendLog = async (message: string, level: string): Promise<void> => {
    const body = {
        message: message,
    }
    await defaultAxios.post(`${url}/${level}`, body);
}