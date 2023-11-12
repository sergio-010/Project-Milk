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
      <main className="w-full h-full  ">
        <section className="w-full h-full   ">
          <article className="w-90% h-90% px-6 p-4">
            <h2 className="text-3xl  pb-4">
              INGRESE LOS DATOS DEL NUEVO USUARIO
            </h2>
          </article>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            className="w-90%  h-[800px] px-6  grid grid-cols-2 "
          >
            <div className=" mr-8 flex flex-col justify-between h-full p-4  ">
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
            </div>
            <section className="flex flex-col justify-between  border-l-4 border-black mr-2 p-4">
              <Select
                label="City"
                options={[
                  { label: "Bogota", value: "bogota" },
                  { label: "Medellin", value: "medellin" },
                  { label: "Cali", value: "cali" },
                  { label: "Cartagena", value: "cartagena" },
                ]}
                defaultOption={{ label: "Seleccione una ciudad", value: "" }}
                name="city"
                id="city"
                value={formik.values.city}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <Select
                label="Department"
                options={[
                  { label: "Perro", value: "perro" },
                  { label: "Carro", value: "carro" },
                  { label: "Arroz", value: "arroz" },
                  { label: "Camion", value: "camion" },
                ]}
                defaultOption={{
                  label: "Seleccione un Departamento",
                  value: "",
                }}
                name="department"
                id="department"
                value={formik.values.department}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
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
              <article className="w-full">
                <button
                  type="submit"
                  className="bg-black text-white text-center p-4 rounded-3xl border w-full hover:bg-white hover:text-black hover:border-black transition-colors "
                >
                  Registrar
                </button>
              </article>
            </section>
          </form>
        </section>
      </main>
    </div>
  );
};
