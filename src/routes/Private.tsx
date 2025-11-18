import { type ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";
import BackGroung from "../images/BackGround_Page.jpg";

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
  const { signed, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return (
      <div
        className="bg-cover bg-center grid grid-cols-3 h-screen items-center select-none"
        style={{ backgroundImage: `url(${BackGroung})` }}
      ></div>
    );
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}
