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
      config.headers["Refresh"] = refreshToken;
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
    await userInstance
      .post("/api/v1/auth/refresh", {
        headers: { Refresh: window.localStorage.getItem("refreshToken") },
      })
      .then((res) => {
        window.localStorage.setItem("refreshToken", res.data.data.refreshToken);
        window.localStorage.setItem("token", res.data.data.accessToken);
      });
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
    return res;
  },
  async (error) => {
    const { config, response } = error;
    if (
      config.url === "/api/v1/auth/refresh" ||
      config._retry ||
      response.staus === 403
    ) {
      return Promise.reject(error);
    }
    config._retry = true;
    try {
      const newToken = await getNewToken();
      if (newToken) {
        config.headers["Authorization"] = `Bearer ${newToken[0]}`;
        config.headers["Refresh"] = newToken[1];
      }
      return userInstance(config);
    } catch (newError) {
      return Promise.reject(newError);
    }
  }
);
