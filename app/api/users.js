import clientApi from "./client";

const register = (userIfno) => clientApi.post("/users", userIfno);

export default {
  register,
};
