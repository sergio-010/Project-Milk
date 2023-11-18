import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllUsers } from "../../services/user";

import { getDepartmentName } from "../../util";

import { User } from "../../interfaces/user";

import trash from "../../assets/trash.svg";
import pencil from "../../assets/pencil.png";
import { Spinner } from "../../components";

export const Users = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <div className="flex justify-end m-4">
        <button
          className="flex justify-end  hover:animate-pulse bg-black text-white font-medium rounded-lg px-3 py-2"
          onClick={() => navigate("/users/create")}
        >
          Crear Usuario
        </button>
      </div>
      <div className=" w-[90-%] mx-auto max-w-screen-xl overflow-hidden ">
        <table className=" w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Nombre completo</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Direccion</th>
              <th className="px-6 py-3 text-left">Telefono</th>
              <th className="px-6 py-3 text-left">Rol</th>
              <th className="px-6 py-3 text-left">Departamento</th>
              <th className="px-6 py-3 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr className="h-32 text-center">
                <td colSpan={8}>
                  <div className="flex justify-center items-center">
                    <Spinner />
                  </div>
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr className="h-16 text-center">
                <td colSpan={8} className="font-bold">
                  No hay usuarios registrados
                </td>
              </tr>
            ) : (
              <>
                {users.map((user, index) => (
                  <tr key={user.id} className="h-16">
                    <td className="px-6 border-b">{index + 1}</td>
                    <td className="px-6 border-b">{user.fullName}</td>
                    <td className="px-6 border-b">{user.email}</td>
                    <td className="px-6 border-b">{user.address}</td>
                    <td className="px-6 border-b">{user.phone}</td>
                    <td className="px-6 border-b">{user.roles[0]}</td>
                    <td className="px-6 border-b">
                      {getDepartmentName(user.department)}
                    </td>
                    <td className="h-16 border-b px-6 flex items-center justify-between">
                      <button className="hover:animate-bounce">
                        <img src={trash} alt="" />
                      </button>
                      <button
                        className="hover:animate-bounce"
                        onClick={() => navigate(`/users/edit/${user.id}`)}
                      >
                        <img src={pencil} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
