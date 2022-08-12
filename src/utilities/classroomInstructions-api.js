import sendRequest from './send-request';
const BASE_URL = '/api/classroomInstructions';


export function createCI(instructions){
    return sendRequest(`${BASE_URL}/create`, 'POST', instructions)
}

export function getAll(){
    return sendRequest(`${BASE_URL}/posts`)
}