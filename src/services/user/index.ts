import { api } from "../../api";

import { AllUserResponse, UserResponse } from "../../interfaces/user";

export const getAllUsers = (): Promise<AllUserResponse> => {
  const token = localStorage.getItem("milkDeliveriesToken");
  return api.get("/auth", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUser = (id: string): Promise<UserResponse> => {
  const token = localStorage.getItem("milkDeliveriesToken");
  return api.get(`/auth/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
