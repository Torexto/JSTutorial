import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function MainContent({ children, className }: Props) {
  const { height } = useWindowSize();

  return (
    <div
      style={{ minHeight: height - 80 }}
      className={clsx("relative top-16 z-0 bg-slate-200 p-2", className)}
    >
      {children}
    </div>
  );
}

export default MainContent;
