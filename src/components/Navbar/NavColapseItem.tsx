import { ReactNode, useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
import clsx from "clsx";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  children: ReactNode;
  items: Array<ObjectProps>;
  navbarColapse: boolean;
  className?: string;
}

interface ObjectProps {
  name: string;
  to: string;
}

function NavColapseItem({ children, items, navbarColapse, className }: Props) {
  const [isColapse, setIsColapse] = useState(true);
  const windowSize = useWindowSize();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsColapse(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={clsx(
        className,
        (windowSize.width ?? 0) >= 600 && !isColapse && "relative"
      )}
    >
      <button
        className={clsx(
          "cursor-pointer p-3 w-full hover:bg-slate-600 text-left",
          (windowSize.width ?? 0) > 600 && "rounded-lg"
        )}
        onClick={() => setIsColapse((prev) => !prev)}
      >
        {children}
      </button>
      <div
        className={clsx(
          (windowSize.width ?? 0) >= 600 &&
            !isColapse &&
            "absolute flex flex-col bg-slate-500 left-1/2 -translate-x-1/2 rounded-[4px]"
        )}
      >
        {items.map((item, i) => (
          <NavItem
            to={item.to}
            key={i}
            className={clsx(
              (windowSize.width ?? 0) < 600 &&
                (navbarColapse || isColapse) &&
                "hidden",
              (windowSize.width ?? 0) < 600 &&
                !navbarColapse &&
                !isColapse &&
                "border-t hover:bg-slate-600",
              (windowSize.width ?? 0) >= 600 && isColapse && "hidden",
              (windowSize.width ?? 0) >= 600 &&
                !isColapse &&
                "block hover:bg-slate-600 rounded-[4px]"
            )}
          >
            {(windowSize.width ?? 0) < 600 && `> ${item.name}`}
            {(windowSize.width ?? 0) > 600 && item.name}
          </NavItem>
        ))}
      </div>
    </div>
  );
}

export default NavColapseItem;
