import axios from "axios";
import { backendUrl } from "./constants";
const socket = 'http://localhost:8085'


export const getStreamResponse = async (prompt) => {
  try {
    const response = axios.post("http://localhost:8081/stream", {
      socket,
      prompt,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
