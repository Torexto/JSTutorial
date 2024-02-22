import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Title({ children, className }: Props) {
  return (
    <div
      className={clsx("w-full p-4 text-center text-4xl font-bold", className)}
    >
      {children}
    </div>
  );
}

export default Title;
