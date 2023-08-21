import httpClient from "../http-common";

const create = (data) => {
  return httpClient.post("/users", data);
};

const getByAccountId = (id) => {
  return httpClient.get(`/users/account/${id}`);
};

const update = (data) => {
  return httpClient.put("/users", data);
};

const get = (id) => {
  return httpClient.get(`/users/${id}`);
};

export default { create, getByAccountId, update, get };
