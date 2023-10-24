import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    localStorage.setItem("token", "123");
    navigate("/", { replace: true });
  };

  return (
    <div className="h-screen">
      <main className="h-full grid max-w-screen-xl mx-auto md:grid-cols-[2fr_3fr] lg:grid-cols-2">
        <div className="bg-milkR bg-cover bg-center hidden md:block  "></div>
        <section>
          <form className="w-90% max-w-md mx-auto h-full py-16 px-6 flex flex-col gap-4 justify-center">
            <article className="space-y-4 mb-8">
              <h2 className="text-3xl">Bienvenidos</h2>
              <p className="font-light text-zinc-600">
                Ingrese Aqui Sus Datos Para Registrarse
              </p>
            </article>
            <div className="grid">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="input-reset" />
            </div>
            <div className="grid">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-reset" />
            </div>
            <div className="grid">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-reset" />
            </div>
            <article className="grid gap-6 mt-8">
              <button
                className="bg-black text-white text-center p-4 rounded-3xl border hover:bg-white hover:text-black hover:border-black transition-colors"
                onClick={handleRegister}
              >
                Registrarse
              </button>
              <button
                className="border border-black p-4 text-center rounded-3xl flex justify-center gap-2 transition-colors hover:bg-black hover:text-white group"
                onClick={() => navigate("/auth/login")}
              >
                Inicia Sesion
              </button>
            </article>
          </form>
        </section>
      </main>
    </div>
  );
};
