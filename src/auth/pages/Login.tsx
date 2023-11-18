import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth";
import { Spinner } from "../../components";
import { useState } from "react";

const INITIAL_VALUES = {
  email: "",
  password: "",
};
export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("El email es requerido"),
      password: Yup.string()
        .min(6, "La contrasena debe tener al menos 6 caracteres")
        .required("La contrasena es requerida"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError("");
      try {
        const { data } = await login(values.email, values.password);
        console.log(data.token);
        localStorage.setItem("milkDeliveriesToken", data.token);
        navigate("/", { replace: true });
      } catch (error) {
        setError("Credenciales incorrectas");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="h-screen">
      <main className="h-full grid max-w-screen-xl mx-auto md:grid-cols-[2fr_3fr] lg:grid-cols-2">
        <div className="bg-milk  bg-cover bg-center hidden md:block  "></div>
        <section>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            className="w-90% max-w-md mx-auto h-full py-16 px-6 flex flex-col gap-4 justify-center"
          >
            <article className="space-y-4 mb-8">
              <h2 className="text-3xl">Bienvenidos</h2>
              <p className="font-light text-zinc-600">Inicia sesion</p>
            </article>

            <div className="grid">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="input-reset"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 text-sm">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div className="grid">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="input-reset"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-500 text-sm mt-2">
                  {formik.errors.password}
                </span>
              )}
            </div>
            <article className="grid gap-6 mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white text-center p-4 rounded-3xl border hover:bg-white hover:text-black hover:border-black transition-colors  flex justify-center"
              >
                {loading && <Spinner />}
                {!loading && "Iniciar Sesion"}
              </button>
              {error && (
                <span className="text-red-500 text-sm text-center">
                  {error}
                </span>
              )}
            </article>
          </form>
        </section>
      </main>
    </div>
  );
};
