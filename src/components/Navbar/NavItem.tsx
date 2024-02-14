import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  to: string;
  className?: string;
}

function NavItem({ children, to, className }: Props) {
  return (
    <div className={clsx(className, "cursor-pointer")}>
      <Link to={to} className="p-3 w-full block">
        {children}
      </Link>
    </div>
  );
}

export default NavItem;
