import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Employees, Users, Register } from "../dashboard/pages";

import { Login, ResetPassword } from "../auth/pages";

export const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<PublicRoutes />}>
            <Route index path="login" element={<Login />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
          <Route path="/" element={<PrivateRoutes />}>
            <Route index element={<Navigate to="/users" />} />
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path="create" element={<Register />} />
              <Route path="edit/:id" element={<Register />} />
            </Route>
            <Route path="employees" element={<Employees />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
