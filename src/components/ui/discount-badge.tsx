import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

const DiscountBadge = ({ children, ...props }: BadgeProps) => {
  return (
    <Badge className={twMerge("px-2 py-[2px]")} {...props}>
      <ArrowDownIcon size={14} />
      {children} %
    </Badge>
  );
};

export default DiscountBadge;
