import config from "../config/config";

export const api = (url, data) => {
  const token = localStorage.getItem("token");

  let options = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "EN",
      "Authorization": token ? `Bearer ${token}` : undefined,
      "Mobile": true,
    },
  };

  if (data) {
    options["method"] = "POST";
    options["body"] = JSON.stringify(data);
  }

  return fetch(config.BASE_URL + url, options).then((res) => res.json());
};

export const getBanners = () => api("home-page");

export const getHomeContent = () => api("mobile-home");

export const getNewsContent = () => api("mobile-home/getNewsPage");

export const getBreakingNewsContent = () => api("breaking-news/all");

export const getRadioDetails = (id) => api(`radio-channel/${id}`);

export const login = (data) => api("auth/generateOTP", data);
