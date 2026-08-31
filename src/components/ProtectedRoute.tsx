import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/redux-beta/hooks";

export default function ProtectedRoute() {
  const { user, status } = useAppSelector((s) => s.auth);
  if (status === "loading")
    return (
      <div className="h-screen flex items-center justify-center">
        Loading…
      </div>
    );
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
}
