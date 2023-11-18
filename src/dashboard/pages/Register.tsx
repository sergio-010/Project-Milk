import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getUser } from "../../services/user";

import { Select, Spinner } from "../../components";
import { FormUser } from "../../interfaces/user";
import { getAllCities, getAllDepartments } from "../../services/location";

import { Option } from "../../interfaces/common";

const INITIAL_VALUES: FormUser = {
  fullName: "",
  dni: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  department: "",
  roles: "",
  isActive: true,
};

export const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        setLoading(true);
        try {
          const resp = await getUser(id);
          console.log(resp);
          formik.setValues({
            fullName: resp.data.fullName,
            dni: resp.data.dni,
            email: resp.data.email,
            phone: resp.data.phone,
            address: resp.data.address,
            city: resp.data.city,
            department: resp.data.department,
            roles: resp.data.roles[0],
            isActive: resp.data.isActive,
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetch();
    }
  }, [id]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getAllDepartments();
      const values = data.map((dep) => ({
        label: dep.name,
        value: dep.id.toString(),
      }));

      setDepartments(values);
    };

    fetch();
  }, []);

  const handleGetCitiesByDepartment = async (departmentId: string) => {
    const { data } = await getAllCities(departmentId);
    const values = data.map((city) => ({
      label: city.name,
      value: city.id.toString(),
    }));
    setCities(values);
  };

  const formik = useFormik<FormUser>({
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
    <>
      <section className="w-full h-full">
        <h2 className="text-3xl px-6 p-4">
          {id ? "EDITAR USUARIO" : "CREAR USUARIO"}
        </h2>

        {loading ? (
          <div className="h-32 flex justify-center items-center">
            <Spinner size="w-12 h-12" />
          </div>
        ) : (
          <form
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className="w-full h-auto px-6 flex flex-col items-center gap-8"
          >
            <div className="grid grid-cols-2 w-full">
              <div className=" flex flex-col h-full p-4  ">
                <div className="grid mb-6">
                  <label htmlFor="fullname">Nombre completo</label>
                  <input
                    id="fullname"
                    type="text"
                    name="fullName"
                    placeholder="Ingrese el nombre completo"
                    className="border-b border-b-black outline-none font-light p-2 h-50"
                    value={formik.values.fullName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid mb-6">
                  <label htmlFor="name">Cedula</label>
                  <input
                    id="dni"
                    type="text"
                    name="dni"
                    placeholder="Ingrese la cedula"
                    className="border-b border-b-black outline-none font-light p-2 h-50"
                    value={formik.values.dni}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid mb-6">
                  <label htmlFor="email">Correo Electronico</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ingrese el correo electronico"
                    className="border-b border-b-black outline-none font-light p-2 h-50"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    id="phone"
                    type="number"
                    name="phone"
                    placeholder="Ingrese el telefono"
                    className="border-b border-b-black outline-none font-light p-2 h-50"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="border-l-4 border-black p-4">
                <Select
                  label="Department"
                  options={departments}
                  defaultOption={{
                    label: "Seleccione un Departamento",
                    value: "",
                  }}
                  name="department"
                  id="department"
                  value={formik.values.department}
                  onBlur={formik.handleBlur}
                  onChange={({ target }) => {
                    formik.setFieldValue("department", target.value);
                    if (target.value) {
                      handleGetCitiesByDepartment(target.value);
                    } else {
                      setCities([]);
                    }
                  }}
                />

                <Select
                  label="City"
                  options={cities}
                  defaultOption={{ label: "Seleccione una ciudad", value: "" }}
                  name="city"
                  id="city"
                  value={formik.values.city}
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

                <div className="grid mb-6">
                  <label htmlFor="address">Dirección</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Ingrese la direccion"
                    className="input-reset"
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="display flex flex-col gap-4">
              <button
                type="submit"
                className="bg-black text-white text-center p-4 rounded-3xl border w-96 hover:bg-white hover:text-black hover:border-black transition-colors"
              >
                {id ? "Actualizar" : "Crear"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/users")}
                className="bg-black text-white text-center p-4 rounded-3xl border w-96 hover:bg-white hover:text-black hover:border-black transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </section>
    </>
  );
};
