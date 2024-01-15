
import { parseCookies } from 'nookies';
import axios from '../utils/axios';

export async function callApi(method, url, data) {
  const token= parseCookies.accessToken
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: method,
    url: url,
    data: data
  }
  const response = await axios(config)
  return response.data

}
