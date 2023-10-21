import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    localStorage.setItem("token", "123");
    navigate("/", { replace: true });
  };

  return (
    <>
      <form className="w-[300px] h-[200px] flex flex-col items-center justify-center bg-gray-400">
        <h1>Registro</h1>

        <button
          type="button"
          className="px-4 py-2 mt-1 bg-blue-500"
          onClick={handleRegister}
        >
          Registrase
        </button>

        <button
          type="button"
          className="px-4 py-2 mt-1 bg-red-500"
          onClick={() => navigate("/auth/login")}
        >
          Iniciar Sesion
        </button>
      </form>
    </>
  );
};
