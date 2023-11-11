// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Select } from "../../components";

const INITIAL_VALUES = {
  fullName: "",
  dni: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  city: "",
  department: "",
  roles: "",
};
export const Register = () => {
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("El nombre es requerido"),
      dni: Yup.string().required("El dni es requerido"),
      email: Yup.string()
        .email("Invalid email")
        .required("El email es requerido"),
      password: Yup.string().required("La contrasena es requerida"),
      phone: Yup.string().required("El telefono es requerido"),
      address: Yup.string().required("La direccion es requerida"),
      city: Yup.string().required("La ciudad es requerida"),
      department: Yup.string().required("El departamento es requerido"),
      roles: Yup.string().required("El rol es requerido"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const { phone, roles, ...rest } = values;
      const body = {
        ...rest,
        phone: phone.toString(),
        roles: [roles],
      };
      console.log(body);
    },
  });

  return (
    <div className="h-screen">
      <main className="h-full grid max-w-screen-xl mx-auto md:grid-cols-[2fr_3fr] lg:grid-cols-2">
        <div className="bg-milkR bg-cover bg-center hidden md:block  "></div>
        <section>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            className="w-90% max-w-md mx-auto h-full py-16 px-6 flex flex-col gap-4 justify-center"
          >
            <article className="space-y-4 mb-8">
              <h2 className="text-3xl">Bienvenidos</h2>
              <p className="font-light text-zinc-600">
                Ingrese Aqui Sus Datos Para Registrarse
              </p>
            </article>

            <div className="grid">
              <label htmlFor="fullname"> Full Name</label>
              <input
                id="fullname"
                type="text"
                name="fullName"
                className="input-reset"
                value={formik.values.fullName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
            <div className="grid">
              <label htmlFor="name">Dni</label>
              <input
                id="dni"
                type="text"
                name="dni"
                className="input-reset"
                value={formik.values.dni}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
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
            </div>
            <div className="grid">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="number"
                name="phone"
                className="input-reset"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
            <div className="grid">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                className="input-reset"
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
            <div className="grid">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                className="input-reset"
                value={formik.values.department}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <option value="">Seleccione un departamento</option>
                <option value="perro">perro</option>
                <option value="carro">carro</option>
                <option value="arroz">arroz</option>
                <option value="camion">camion</option>
              </select>
            </div>
            <div className="grid">
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
                className="input-reset"
                value={formik.values.city}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <option value=""></option>
                <option value="carro">carro</option>
                <option value="perro">perro</option>
                <option value="arroz">arroz</option>
                <option value="camion">camion</option>
              </select>
            </div>
            <Select
              label="Roles"
              options={[
                { label: "Admin", value: "admin" },
                { label: "Usuario", value: "user" },
                { label: "Empleado", value: "employees" },
              ]}
              defaultOption={{ label: "Seleccione un Rol", value: "" }}
              name="roles"
              id="roles"
              value={formik.values.roles}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
            <article className="grid gap-6 mt-8">
              <button
                type="submit"
                className="bg-black text-white text-center p-4 rounded-3xl border hover:bg-white hover:text-black hover:border-black transition-colors"
              >
                Registrarse
              </button>
            </article>
          </form>
        </section>
      </main>
    </div>
  );
};
