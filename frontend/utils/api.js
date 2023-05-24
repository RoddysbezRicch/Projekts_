import {API_URL, STRAPI_API_TOKEN} from "./urls";


export const fetchDataFromApi = async (endpoint) => {
  const options = {
      method: "GET",
      headers: {
          Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};


export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`,{
    method: "POST",
      headers: {
          Authorization: "Bearer " + STRAPI_API_TOKEN,
          "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
  })
  const data = await res.json()
  return data
}
// export const login = async (email, password, endpoint) => {
//   const res = await fetch(`${API_URL}/auth/local/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       identifier: email,
//       password: password,
//     }),
//   });
//   const data = await res.json();
//   return data;
// };
// export const register = async (username, email, password) => {
//   const res = await fetch(`${API_URL}/auth/local/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: username,
//       email: email,
//       password: password,
//     }),
//   });
//   const data = await res.json();
//   return data;
// };