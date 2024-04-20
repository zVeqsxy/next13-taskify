import { childrenProps } from "@/types";

const ClerkLayout = ({ children }: childrenProps) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
