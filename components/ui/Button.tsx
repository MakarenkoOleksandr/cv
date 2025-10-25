import classNames from "classnames";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Button = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <button
      className={classNames(
        "text-main border border-main rounded-md px-3 py-1 cursor-pointer transition-all hover:scale-120 hover:bg-main hover:text-black",
        {
          "bg-main text-black!":
            children === "Home"
              ? pathname === "/"
              : pathname === `/${children?.toString().toLowerCase()}`,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
