import api from "../../api";
import { RegisterBody } from "../../interfaces/auth";

export const login = (email: string, password: string) => {
  return api.post("/auth/login", { email, password });
};

export const register = (body: RegisterBody) => {
  return api.post("/auth/register", body);
};
