import { cn } from "@/lib/utils";

interface IDashboard {
  className?: string;
  role: "team member" | "project manager" | "admin";
}

const Dashboard = ({ className, role = "team member" }: IDashboard) => {
  return (
    <div className={cn("", className)}>
      <h2 className="text-2xl font-bold capitalize">{role} Dashboard</h2>
    </div>
  );
};

export default Dashboard;
