import sendRequest from "./send-request";
const BASE_URL = "/api/lessonPlans";

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function createLessonPlan(lesson) {
  return sendRequest(`${BASE_URL}/create`, "POST", lesson);
}

export function viewLessonPlan(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updateLessonPlan(lesson) {
  return sendRequest(`${BASE_URL}/${lesson.id}`, "PUT", lesson);
}

export function deleteLessonPlan(LessonPlan) {
  return sendRequest(`${BASE_URL}/${LessonPlan._id}`, "DELETE", LessonPlan);
}
