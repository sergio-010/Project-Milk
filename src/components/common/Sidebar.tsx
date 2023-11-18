import { Link, useNavigate } from "react-router-dom";

import { SideItem } from ".";

import cow from "../../assets/cow.svg";
import exit from "../../assets/exit.svg";
import pencil from "../../assets/pencil.png";

const routes = [
  { id: 2, to: "/users", text: "Users", icon: pencil, size: "1.25rem" },
  { id: 3, to: "/employees", text: "Employees", icon: pencil, size: "1.25rem" },
];

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-[250px] h-full min-w-[150px] flex flex-col gap-4 lg:w-[350px] border-r-4 border-black md:w-[250px]">
      <Link to="/" className="flex justify-center px-4">
        <img
          src={cow}
          alt="cow-icon"
          className={"w-24 h-24 hover:animate-pulse"}
        />
      </Link>

      <ul className="flex flex-col gap-4 px-4">
        {routes.map((route) => (
          <SideItem key={route.id} route={route} />
        ))}
      </ul>

      <button
        className="w-28 flex items-center justify-center gap-2 text-white font-medium px-3 py-2 mx-auto rounded-lg bg-red-500 hover:font-bold"
        onClick={() => {
          localStorage.removeItem("milkDeliveriesToken");
          navigate("/auth/login", { replace: true });
        }}
      >
        <img
          src={exit}
          alt="logout-icon"
          className="w-5 h-5 text-white hover:animate-pulse"
        />
        Logout
      </button>
    </aside>
  );
};
