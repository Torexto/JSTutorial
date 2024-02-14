import { ReactNode, useState } from "react";
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
  const [isColapse, SetIsColapse] = useState(true);
  const windowSize = useWindowSize();

  return (
    <div
      className={clsx(
        className,
        (windowSize.width ?? 0) >= 400 && !isColapse && "relative"
      )}
    >
      <button
        className={clsx(
          "cursor-pointer p-2 w-full hover:bg-slate-600 text-left",
          (windowSize.width ?? 0) > 400 && "rounded-lg"
        )}
        onClick={() => SetIsColapse((prev) => !prev)}
      >
        {children}
      </button>
      <div
        className={clsx(
          (windowSize.width ?? 0) >= 400 &&
            !isColapse &&
            "absolute flex flex-col bg-slate-500 left-1/2 -translate-x-1/2 rounded-[4px]"
        )}
      >
        {items.map((item, i) => (
          <NavItem
            to={item.to}
            key={i}
            className={clsx(
              (windowSize.width ?? 0) < 400 &&
                (navbarColapse || isColapse) &&
                "hidden",
              (windowSize.width ?? 0) < 400 &&
                !navbarColapse &&
                !isColapse &&
                "border-t hover:bg-slate-600",
              (windowSize.width ?? 0) >= 400 && isColapse && "hidden",
              (windowSize.width ?? 0) >= 400 &&
                !isColapse &&
                "block hover:bg-slate-600 rounded-[4px]"
            )}
          >
            {(windowSize.width ?? 0) < 400 && `> ${item.name}`}
            {(windowSize.width ?? 0) > 400 && item.name}
          </NavItem>
        ))}
      </div>
    </div>
  );
}

export default NavColapseItem;
