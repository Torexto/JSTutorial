import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Definition({ children, className }: Props) {
  return (
    <div
      className={clsx("bg-green-400 p-6 text-lg rounded-md my-4", className)}
    >
      {children}
    </div>
  );
}

export default Definition;
