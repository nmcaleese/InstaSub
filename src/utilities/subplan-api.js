import sendRequest from './send-request';
const BASE_URL = '/api/subplans';


export function createSubPlan(populatedModules){
    return sendRequest(`${BASE_URL}/create`, 'POST', populatedModules)
}