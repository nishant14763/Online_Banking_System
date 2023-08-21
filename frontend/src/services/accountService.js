import httpClient from "../http-common";

const get = (id) => {
  return httpClient.get(`/accounts/${id}`);
};

export default { get };
