import { ComponentProps } from "react";

const SectionTile = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-3 pl-5 font-bold uppercase" {...props}>
      {children}
    </p>
  );
};

export default SectionTile;
