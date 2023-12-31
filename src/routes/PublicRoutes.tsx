import { Navigate, Outlet } from "react-router-dom";
import { AuthLayout } from "../auth/components/layouts";

export const PublicRoutes = () => {
  const token = localStorage.getItem("milkDeliveriesToken");

  if (token) return <Navigate to="/" />;

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
