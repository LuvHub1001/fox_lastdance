import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

instanceAxios.interceptors.request.use(
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

instanceAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export const get = async (url, config = null) => {
  return await instanceAxios.get(url, config);
};

export const post = async (url, data, config) => {
  return await instanceAxios.post(url, data, config);
};

export const patch = async (url, data, config) => {
  return await instanceAxios.patch(url, data, config);
};

export const del = async (url, config) => {
  return await instanceAxios.delete(url, config);
};
