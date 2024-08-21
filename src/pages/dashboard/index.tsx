import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";

interface IDashboard {
  className?: string;
}

const Dashboard = ({ className }: IDashboard) => {
  const role = "admin";

  return (
    <div className={cn("", className)}>
      <Sidebar>
        <h2 className="text-2xl font-bold capitalize">{role} Dashboard</h2>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
