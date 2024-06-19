const API_URL = "https://api.hinxt.com/api/v1/";

const token = localStorage.getItem("token");

export const getHomeContent = () => {
  return fetch(API_URL + "mobile-home").then((res) => res.json());
};
