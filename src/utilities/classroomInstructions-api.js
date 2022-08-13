import sendRequest from './send-request';
const BASE_URL = '/api/classroomInstructions';


export function getAll(){
    return sendRequest(`${BASE_URL}`)
}

export function createCI(instructions){
    return sendRequest(`${BASE_URL}/create`, 'POST', instructions)
}

export function viewCI(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

export function updateCI(instructions){
    return sendRequest(`${BASE_URL}/${instructions.id}`, 'PUT', instructions)
}

export function deleteCI(CI){
    return sendRequest(`${BASE_URL}/${CI._id}`, 'DELETE', CI)
}