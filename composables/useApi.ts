import axios from "axios";

const API = import.meta.env.VITE_BASE_URL;

export const useApi = () => {
  const baseURL = API
  const axiosClient = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return axiosClient;
};