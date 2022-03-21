import clientApi from "./client";

const endpoint = "/listings";
const getListings = () => clientApi.get(endpoint);

export default getListings;
