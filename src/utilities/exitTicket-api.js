import sendRequest from './send-request';
const BASE_URL = '/api/exitTickets';


export function getAll(){
    return sendRequest(`${BASE_URL}`)
}

export function createExitTicket(ticket){
    return sendRequest(`${BASE_URL}/create`, 'POST', ticket)
}

export function viewExitTicket(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

export function updateExitTicket(ticket){
    return sendRequest(`${BASE_URL}/${ticket.id}`, 'PUT', ticket)
}

export function deleteExitTicket(ExitTicket){
    return sendRequest(`${BASE_URL}/${ExitTicket._id}`, 'DELETE', ExitTicket)
}