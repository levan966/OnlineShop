import { create } from "apisauce";
import cache from "../utility/cache";
import authtorage from "../auth/storage";

const clientApi = create({
  baseURL: "http://192.168.20.53:9000/api",
  // baseURL: "http://192.168.31.39:9000/api",
});

clientApi.addAsyncRequestTransform(async (request) => {
  const authToken = await authtorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = clientApi.get;

clientApi.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default clientApi;
