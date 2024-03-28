import axios, { isAxiosError, HttpStatusCode } from "axios";

const AXIOS_TIME_OUT = 3000;
const RETRY_TIME_OUT = 500;
const RETRY_MAX_COUNT = 3;
let RETRY_COUNT = 0;

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
    if (isAxiosError(err)) {
      if (err.status === HttpStatusCode.NotFound) {
        alert(
          `Cannot Find EndPoint :: ${err.config.baseURL} ${err.config.url}`,
        );
      } else if (err.status === HttpStatusCode.BadRequest) {
        console.log(`Bad Request :: ${err.config.data}`);
      } else {
        throw err;
      }
    }
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  (res) => {
    RETRY_COUNT = 3;
    return res;
  },
  (err) => {
    if (isAxiosError(err) && err.response) {
      switch (err.response.status) {
        case HttpStatusCode.NotFound:
          while (RETRY_COUNT++ < RETRY_MAX_COUNT) {
            backOffRequest(RETRY_TIME_OUT * RETRY_COUNT, err.config);
          }
          break;

        case HttpStatusCode.Unauthorized:
          console.log(`Unauthorized :: ${err.config.headers}`);
          break;

        case HttpStatusCode.BadRequest:
          console.log(`Bad Request :: ${err.config.headers}`);
          break;

        case HttpStatusCode.Forbidden:
          console.log(`Forbidden :: ${err.config.headers}`);
          break;

        case HttpStatusCode.BadGateway:
          while (RETRY_COUNT++ < RETRY_MAX_COUNT) {
            backOffRequest(RETRY_TIME_OUT * RETRY_COUNT, err.config);
          }
          break;

        default:
          console.log(
            `ERROR STATUS :: ${err.status} ERROR MESSAGE :: ${err.message}`,
          );
      }
    } else {
      throw err;
    }

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

const backOffRequest = async (times, config) => {
  setTimeout(async () => {
    await axiosInstance.request(config);
  }, times);
};
