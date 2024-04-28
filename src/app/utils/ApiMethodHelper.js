import { callApi } from "../libs/callApi";

const defaultRoute = "/app";

export async function fetchAllData(url) {
  return await callApi("get", defaultRoute + url);
}
export async function fetchSearchData(url, searchParams) {
  return await callApi("get", defaultRoute + url, searchParams);
}

export async function fetchSingleData(url) {
  return await callApi("get", defaultRoute + url);
}

export async function exportData(url) {
  return await callApi("get", defaultRoute + url, null, "arraybuffer");
}

export async function deleteSingleData(url) {
  return await callApi("delete", defaultRoute + url);
}

export async function createData(url, data) {
  return await callApi("post", defaultRoute + url, data);
}

export async function editData(url, data) {
  return await callApi("put", defaultRoute + url, data);
}
