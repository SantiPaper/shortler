import { useAuth0 } from "@auth0/auth0-react";
import style from "./style.module.css";

export const Authenticator = () => {
  const { user, logout, loginWithRedirect, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return;
  }
  return (
    <div className={style.container}>
      {user ? (
        <h3>
          Bienvenido <span>{user.name}</span>
        </h3>
      ) : null}
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
      ) : (
        <button onClick={() => logout()}>Cerrar sesión</button>
      )}
    </div>
  );
};
