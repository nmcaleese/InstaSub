import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    console.log('hit line 8 in send request')
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken()
  if(token) {
    console.log('hit line 14 in send request')
    //ensure the headers object exists
    options.headers = options.headers || {}
    //add token to an Authorization header
    //prefacing with 'Bearer' is recommented in the HTTP
    options.headers.Authorization = `Bearer ${token}`
  }

  const res = await fetch(url, options);
  console.log('hit line 23 in send request' )
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
