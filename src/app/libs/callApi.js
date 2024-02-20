import { parseCookies } from "nookies";
import axios from "../utils/axios";
import ToastsBox from "../components/Toasts/ToastsBox";

export async function callApi(method, url, data, responseType = null) {
  const token = parseCookies().accessToken;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: method,
    url: url,
    data: data,
    responseType: responseType,
  };
  const response = await axios(config);

  if (
    (response.status === 200 || response.status === 201) &&
    response.data.msg &&
    response.data.alertVisible === 1
  ) {
    ToastsBox.success({ message: response.data.msg });
  }

  return response.data;
}
