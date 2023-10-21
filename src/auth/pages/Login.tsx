import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "123");
    navigate("/", { replace: true });
  };

  return (
    <>
      <form className="w-[300px] h-[200px] flex flex-col items-center justify-center bg-gray-400">
        <h1>Login</h1>

        <button
          type="button"
          className="px-4 py-2 mt-1 bg-blue-500"
          onClick={handleLogin}
        >
          Ingresar
        </button>

        <button
          type="button"
          className="px-4 py-2 mt-1 bg-red-500"
          onClick={() => navigate("/auth/register")}
        >
          Registrarse
        </button>

        <button
          type="button"
          className="px-4 py-2 mt-1 bg-green-500"
          onClick={() => navigate("/auth/reset")}
        >
          Recuperar contraseña
        </button>
      </form>
    </>
  );
};
