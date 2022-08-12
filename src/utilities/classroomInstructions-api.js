import sendRequest from './send-request';
const BASE_URL = '/api/classroomInstructions';


export function createCI(instructions){
    return sendRequest(`${BASE_URL}/create`, 'POST', instructions)
}