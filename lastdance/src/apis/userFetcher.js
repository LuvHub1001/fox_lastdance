import axios, { AxiosError, HttpStatusCode, isAxiosError } from "axios";

const RETRY_TIME_COUNT = 500;
const AXIOS_TIMEOUT = 3000;

// 최대 3번 재시도
const retryMaxCount = 3;
const retryCount = 0;

const instanceAxios = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: AXIOS_TIMEOUT,
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
    if (isAxiosError(err)) {
      if (err.status === HttpStatusCode.NotFound) {
        alert(
          `Cannot Find Endpoint :: ${err.config?.baseURL} ${err.config.url}`,
        );
      } else {
        throw err;
      }
    }

    return Promise.reject(err);
  },
);

instanceAxios.interceptors.response.use(
  (res) => {
    retryCount = 3;
    return res;
  },
  (err) => {
    if (isAxiosError(err) && err.response) {
      switch (err.response.status) {
        case HttpStatusCode.BadRequest:
          console.error(`Bad Request :: ${err.config.data}`);
          break;

        case HttpStatusCode.NotFound:
          while (retryCount++ < retryMaxCount) {
            backoffRequest(RETRY_TIME_COUNT * retryCount, err.config);
          }
          break;

        case HttpStatusCode.Unauthorized:
          console.error(`Unauthorized :: ${err.config.headers}`);
          break;

        case HttpStatusCode.Forbidden:
          console.error(`Forbidden :: ${err.config.headers}`);
          break;

        case HttpStatusCode.BadGateway:
          while (retryCount++ < retryMaxCount) {
            backoffRequest(RETRY_TIME_COUNT * retryCount, err.config);
          }
          break;
        default:
          console.error(
            `Error :: status : ${err.status} message: ${err.message}`,
          );

          break;
      }
    } else {
      throw err;
    }
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

const backoffRequest = async (times, config) => {
  setTimeout(async () => {
    await this.fetcher.request(config);
  }, times);
};
