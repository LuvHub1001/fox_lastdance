import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (req) => {
    if (req.data instanceof FormData) {
      req.headers["Content-Type"] = "multipart/form-data";
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export const get = async (url, config = null) => {
  return await axiosInstance.get(url, config);
};

export const post = async (url, data, config) => {
  return await axiosInstance.post(url, data, config);
};

export const patch = async (url, data, config) => {
  return await axiosInstance.patch(url, data, config);
};

export const del = async (url, config) => {
  return await axiosInstance.delete(url, config);
};
