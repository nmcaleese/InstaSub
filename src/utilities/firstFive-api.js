import sendRequest from "./send-request";
const BASE_URL = "/api/firstFives";

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function createFirstFive(prompt) {
  return sendRequest(`${BASE_URL}/create`, "POST", prompt);
}

export function viewFirstFive(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updateFirstFive(prompt) {
  return sendRequest(`${BASE_URL}/${prompt.id}`, "PUT", prompt);
}

export function deleteFirstFive(FirstFive) {
  return sendRequest(`${BASE_URL}/${FirstFive._id}`, "DELETE", FirstFive);
}
