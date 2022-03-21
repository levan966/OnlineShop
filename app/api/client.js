import { create } from "apisauce";

const clientApi = create({
  baseURL: "http://192.168.20.27:9000/api",
});

export default clientApi;
