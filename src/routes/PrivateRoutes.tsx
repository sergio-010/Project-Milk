import { Navigate, Outlet } from "react-router-dom";
import { MainLayout } from "../auth/components/layouts";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/auth/login" />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
