import { callApi } from "../libs/callApi";

const defaultRoute = "/app";

export async function fetchAllData(url:string) {
  return await callApi("get", defaultRoute + url);
}
export async function fetchSearchData(url:string, searchParams:any) {
  return await callApi("get", defaultRoute + url, searchParams);
}

export async function fetchSingleData(url:string) {
  return await callApi("get", defaultRoute + url);
}

export async function exportData(url:string) {
  return await callApi("get", defaultRoute + url, null, "arraybuffer");
}

export async function deleteSingleData(url:string) {
  return await callApi("delete", defaultRoute + url);
}

export async function createData(url:string, data:any) {
  return await callApi("post", defaultRoute + url, data);
}

export async function editData(url:string, data:any) {
  return await callApi("put", defaultRoute + url, data);
}
