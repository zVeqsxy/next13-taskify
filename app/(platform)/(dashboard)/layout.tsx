import { childrenProps } from "@/types";
import Navbar from "./_components/Navbar";

const DashboardLayout = ({ children }: childrenProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
