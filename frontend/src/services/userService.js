import httpClient from "../http-common";

const create = (data) => {
  return httpClient.post("/users", data);
};

export default { create };
