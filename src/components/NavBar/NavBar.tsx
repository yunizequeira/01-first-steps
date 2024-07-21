import { options } from "@/libs/const";
import { ActiveLink } from "./Active-Link";
export const NavBar = () => {
  return (
    <nav className="flex justify-center items-center  p-2 bg-blue-800 bg-opacity-30 m-2 rounded">
      <ul className="w-full flex justify-between gap-2 px-2">
        <li className="">
          <ActiveLink path="/" text="Home" />
        </li>
        <div className="flex gap-2">
          {options.map((option) => (
            <li key={option.text}>
              <ActiveLink {...option} />
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};
