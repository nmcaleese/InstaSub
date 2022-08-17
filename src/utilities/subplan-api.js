import sendRequest from "./send-request";
const BASE_URL = "/api/subplans";

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function createSubPlan(populatedModules) {
  return sendRequest(`${BASE_URL}/create`, "POST", populatedModules);
}

export function viewSubPlan(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteSubPlan(SubPlan) {
  return sendRequest(`${BASE_URL}/${SubPlan._id}`, "DELETE", SubPlan);
}
