import { useState } from "react";
import { baseInstance } from "./instance";
import { AxiosResponse } from "axios";

const encodeCredentials = (email: string, password: string) => {
  const credentials = `${email}:${password}`;
  return btoa(credentials);
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<AxiosResponse | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const encodedCredentials = encodeCredentials(email, password);

    try {
      const res = await baseInstance.post(
        "/api/v1/auth/sign-in",
        {},
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        }
      );
      setResponse(res);
      setSuccess(res.data.success);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("알 수 없는 에러가 발생하였습니다."));
      }
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, response, success };
};

export default useLogin;
