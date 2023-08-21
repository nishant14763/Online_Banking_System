import httpClient from "../http-common";

const sendMail = (data) => {
  return httpClient.post("/sendMail", data);
};

export default { sendMail };
