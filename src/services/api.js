const API_URL = "https://api.hinxt.com/api/v1/";

const token = localStorage.getItem("token");

export const getHomeContent = () => {
  return fetch(API_URL + "mobile-home").then((res) => res.json());
};

export const getNewsContent = () => {
  return fetch(API_URL + "mobile-home/getNewsPage").then((res) => res.json());
};

export const getBreakingNewsContent = () => {
  return fetch(API_URL + "breaking-news/all").then((res) => res.json());
};

export const getRadioDetails = (id) => {
  return fetch(API_URL + `radio-channel/${id}`).then((res) => res.json());
};
