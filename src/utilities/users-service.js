// Holds all the business logic between the user and react that is pertinent to the application that does not have to do with any components or network calls to an api

import * as usersAPI from './users-api'

// singup process minus the api call. Though it is utilized fo rhte api call

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    // Persist the "token"
    localStorage.setItem('token', token);
    return getUser()
  }

export async function login(userData){
  //NETWORK CALLS GO THROUGH USER API
  const token = await usersAPI.login(userData)
  //get a web token back (JWT) (loging in creates a new JWT) and save it to the client
  localStorage.setItem('token', token);
  return getUser()
}

export function logOut(){
    localStorage.removeItem('token')
  }


export function getToken(){
  //get item returns null if there's no string
  const token = localStorage.getItem('token');
  if(!token) return null;
  //obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // a JWT's expiration is expressed in seconds, not milliseconds, so convert
  if (payload.exp <Date.now() /1000) {
    //token has expired, remove it from localStorage
    localStorage.removeItem('token');
    return null
  }
  return token
}

export function getUser(){
  const token = getToken()
  //if there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user: null;
}

