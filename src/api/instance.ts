import axios from "axios";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});
export const userInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

userInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    const refreshToken = window.localStorage.getItem("refreshToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (refreshToken) {
      config.headers["Refresh"] = `Bearer ${refreshToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 토큰 갱신 함수
export const getNewToken = async () => {
  try {
    const refreshToken = window.localStorage.getItem("refreshToken");
    const response = await userInstance.post(
      "/api/v1/auth/refresh",
      {},
      {
        headers: { Authorization: `Bearer ${refreshToken}` },
      }
    );
    window.localStorage.setItem(
      "refreshToken",
      response.data.data.refreshToken
    );
    window.localStorage.setItem("token", response.data.data.accessToken);

    return [
      window.localStorage.getItem("token"),
      window.localStorage.getItem("refreshToken"),
    ];
  } catch (error) {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("refreshToken");
    window.dispatchEvent(new CustomEvent("refreshFailed"));
    throw new Error("Token refresh failed");
  }
};

userInstance.interceptors.response.use(
  (res) => {
    console.log("인터셉트res", res);
    return res;
  },
  async (error) => {
    console.log("인터셉트 에러", error);
    const { config, response } = error;
    console.log("콘피그", config, "Res", response);

    if (
      response.staus === 403 ||
      response.config.url === "/api/v1/auth/refresh"
    ) {
      return Promise.reject(error);
    }
    config._retry = true;
    try {
      const newToken = await getNewToken();
      if (newToken) {
        config.headers["Authorization"] = `Bearer ${newToken[0]}`;
        config.headers["Refresh"] = `Bearer ${newToken[1]}`;
      }
      return userInstance(config);
    } catch (newError) {
      return Promise.reject(newError);
    }
  }
);
