import pencil from "../../assets/pencil.png";
import trash from "../../assets/trash.svg";

export const Users = () => {
  return (
    <div className=" w-[90-%] mx-auto max-w-screen-xl overflow-hidden ">
      <table className=" w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left">ID</th>
            <th className="px-6 py-3 text-left">Nombre</th>
            <th className="px-6 py-3 text-left">Direccion</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-t px-6 py-4 border-b "></td>
            <td className="border-t px-6 py-4 border-b"></td>
            <td className="border-t px-6 py-4 border-b"></td>
            <td className="border-t border-b px-6 py-4 flex items-center justify-center">
              <button className="  hover:animate-bounce text-white rounded px-3 py-1 mr-2">
                <img src={trash} alt="" />
              </button>
              <button className=" text-white rounded px-3 py-1 ">
                <img className=" hover:animate-bounce" src={pencil} alt="" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="px-6 py-4 flex justify-end">
        <button className="flex justify-end  hover:animate-pulse   bg-black  text-white  rounded px-3 py-1">
          Agregar
        </button>
      </div>
    </div>
  );
};
