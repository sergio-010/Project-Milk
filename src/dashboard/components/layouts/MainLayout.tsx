import { Link, useNavigate } from "react-router-dom";
import cow from "../../../assets/cow.svg";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen flex   ">
      <aside className="h-full  w-[250px] min-w-[150px]  md:w-[250px]    flex flex-col gap-4   lg:w-[350px] border-r-4  border-black">
        <ul className="flex flex-col gap-4  items-center ">
          <li className="hover:font-bold mt-3">
            <Link to="/dashboard">
              <img
                src={cow}
                alt="cow"
                className="w-20 h-20 hover:animate-pulse  "
              />
            </Link>
          </li>
          <li className="hover:font-bold border-b">
            <Link to="/dashboard/users">Users</Link>
          </li>
          <li className="hover:font-bold border-b">
            <Link to="/employees">Employees</Link>
          </li>
          <li>
            <button
              className="hover:font-bold border-b"
              onClick={() => {
                localStorage.removeItem("milkDeliveriesToken");
                navigate("/auth/login", { replace: true });
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>
      <section className="w-full h-full grow">{children}</section>
    </div>
  );
};
