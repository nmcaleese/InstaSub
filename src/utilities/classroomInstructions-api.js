import sendRequest from './send-request';
const BASE_URL = '/api/classroomInstructions';


export function createCI(){
    return sendRequest(`${BASE_URL}/create`)
}