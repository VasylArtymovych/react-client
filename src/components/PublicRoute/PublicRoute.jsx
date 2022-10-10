import { Navigate } from "react-router-dom";

export default function PublicRoute({
  isLoggedIn,
  isRegistered,
  restricted,
  redirectPath = "/",
  children,
}) {
  if (isRegistered && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  if (isLoggedIn && restricted) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
