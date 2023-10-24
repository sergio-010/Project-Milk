import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Employees, Users } from "../dashboard/pages";

import { Login, Register, ResetPassword } from "../auth/pages";

export const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<PublicRoutes />}>
            <Route index path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>

          <Route path="/" element={<PrivateRoutes />}>
            <Route index element={<Users />} />
            <Route path="employees" element={<Employees />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
