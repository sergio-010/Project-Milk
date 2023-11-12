import { useNavigate } from "react-router-dom";
import pencil from "../../assets/pencil.png";
import trash from "../../assets/trash.svg";

export const Users = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-end m-4">
        <button
          className="flex justify-end  hover:animate-pulse   bg-black  text-white  rounded px-3 py-2"
          onClick={() => navigate("/users/create")}
        >
          Agregar Nuevo Usuario
        </button>
      </div>
      <div className=" w-[90-%] mx-auto max-w-screen-xl overflow-hidden ">
        <table className=" w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Nombre completo</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Direccion</th>
              <th className="px-6 py-3 text-left">Telefono</th>
              <th className="px-6 py-3 text-left">Rol</th>
              <th className="px-6 py-3 text-left">Departamento</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="border-t px-6 py-4 border-b ">dd</td>
              <td className="border-t px-6 py-4 border-b">ddd</td>
              <td className="border-t px-6 py-4 border-b">ddd</td>
              <td className="border-t px-6 py-4 border-b">ddd</td>
              <td className="border-t px-6 py-4 border-b">ddd</td>
              <td className="border-t px-6 py-4 border-b">ddd</td>
              <td className="border-t px-6 py-4 border-b">ddd</td>
              <td className="border-t border-b px-6 py-4 flex items-center justify-center">
                <button className="  hover:animate-bounce text-white rounded px-3 py-1 mr-2">
                  <img src={trash} alt="" />
                </button>
                <button
                  className=" text-white rounded px-3 py-1 "
                  onClick={() => navigate("/users/edit/1")}
                >
                  <img className=" hover:animate-bounce" src={pencil} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="px-6 py-4 flex justify-end"></div>
      </div>
    </>
  );
};
