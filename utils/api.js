import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + STRAPI_API_TOKEN,
        },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch('http://127.0.0.1:1337/api/orders', {
        method: "POST",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
       
    });
    const data = await res.json();
    console.log("data -->" , data);
    console.log("make payment ki call ");
    return data;
};  
// `${API_URL}${endpoint}`