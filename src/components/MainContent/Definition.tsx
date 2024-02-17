import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Definition({ children, className }: Props) {
  return <div className={clsx("", className)}>{children}</div>;
}

export default Definition;