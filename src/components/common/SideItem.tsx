import { NavLink } from "react-router-dom";

type Route = {
  to: string;
  text: string;
  icon: string;
  size?: string;
};

interface Props {
  route: Route;
}

export const SideItem = ({ route }: Props) => {
  return (
    <li className="hover:font-bold">
      <NavLink
        to={route.to}
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-2 font-bold"
            : "flex items-center gap-2"
        }
      >
        <img
          src={route.icon}
          alt={`${route.text}-icon`}
          className={"hover:animate-pulse"}
          style={{ width: route.size, height: route.size }}
        />
        <span>{route.text}</span>
      </NavLink>
    </li>
  );
};
