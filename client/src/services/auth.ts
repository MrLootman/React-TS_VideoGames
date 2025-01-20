import Cookies from "js-cookie";
import type { UserLogin } from "../pages/LoginPage/Login";

export const login = async (informations: UserLogin) => {
  try {
    const { email, password } = informations;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/auth`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );
    return response.status === 200;
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    return false;
  }
};

export const isAuthenticated = (): boolean => {
  const token = Cookies.get("auth_token");
  return !!token;
};
