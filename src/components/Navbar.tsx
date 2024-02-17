import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import clsx from "clsx";
import NavColapseItem from "./Navbar/NavColapseItem";
import NavItem from "./Navbar/NavItem";
import { useWindowSize } from "@uidotdev/usehooks";

function Navbar1() {
  const [isColapse, setIsColapse] = useState(true);
  const windowSize = useWindowSize();

  const tutorialItems = [
    { name: "Variables", to: "/variables" },
    { name: "Data Types", to: "/datatypes" },
    { name: "Operators", to: "/operators" },
    { name: "Conditional statements", to: "/conditionalstatements" },
    { name: "Loops", to: "/loops" },
    { name: "Function", to: "/function" },
    { name: "Objects", to: "/objects" },
  ];

  return (
    <nav className="h-16 text-2xl flex items-center justify-between bg-slate-700 text-white shadow-2xl px-4 fixed w-full top-0 left-0 z-50">
      <div>
        <Link to="/">Java Script</Link>
      </div>
      <div>
        <ul
          className={clsx(
            (windowSize.width ?? 0) < 600 && isColapse && "hidden",
            (windowSize.width ?? 0) < 600 &&
              !isColapse &&
              "absolute top-16 left-0 bg-slate-500 flex flex-col w-full",
            (windowSize.width ?? 0) >= 600 &&
              "flex items-center h-full gap-x-2 static"
          )}
        >
          <li className={clsx((windowSize.width ?? 0) < 600 && "border-t")}>
            <NavColapseItem items={tutorialItems} navbarColapse={isColapse}>
              Tutorial
            </NavColapseItem>
          </li>
          <li
            className={clsx(
              (windowSize.width ?? 0) < 600 && "border-t",
              (windowSize.width ?? 0) > 600 &&
                "rounded-lg h-full grid place-content-center",
              "hover:bg-slate-600"
            )}
          >
            <NavItem to="/latestupdate">Latest Update</NavItem>
          </li>
        </ul>
      </div>
      <div
        className={clsx(
          (windowSize.width ?? 0) < 600
            ? "flex justify-center items-center"
            : "hidden"
        )}
      >
        <button
          onClick={() => setIsColapse((prev) => !prev)}
          className="cursor-pointer p-1 w-12 h-12 border rounded-md hover:bg-slate-800"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar1;
