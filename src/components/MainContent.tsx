import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function MainContent({ children, className }: Props) {
  let { height } = useWindowSize();
  height = height ?? 0;

  return (
    <div
      style={{ minHeight: height - 80 }}
      className={clsx(
        "relative top-16 z-0 bg-slate-200 p-6 mx-auto w-10/12 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MainContent;
