import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import StatsCard from "@/components/stats-card";

interface IDashboard {
  className?: string;
  role: "admin" | "team member" | "project manager";
}

const Dashboard = ({ className, role }: IDashboard) => {
  let projects: any = [];

  const adminProjects = [
    {
      id: 1,
      name: "Project Alpha",
      completedTasks: 5,
      totalTasks: 10,
      progressPercentage: 50,
    },
    {
      id: 2,
      name: "Project Beta",
      completedTasks: 8,
      totalTasks: 20,
      progressPercentage: 40,
    },
    {
      id: 3,
      name: "Project Gamma",
      completedTasks: 15,
      totalTasks: 15,
      progressPercentage: 100,
    },
  ];

  const projectManagerProjects = [
    {
      id: 1,
      name: "Project Alpha",
      completedTasks: 5,
      totalTasks: 10,
      progressPercentage: 50,
    },
  ];

  const teamMemberProjects = [
    {
      id: 1,
      name: "Project Alpha",
      completedTasks: 2,
      totalTasks: 10,
      progressPercentage: 20,
    },
  ];

  switch (role) {
    case "admin":
      projects = adminProjects;
      break;
    case "project manager":
      projects = projectManagerProjects;
      break;
    case "team member":
      projects = teamMemberProjects;
      break;
    default:
      throw new Error("Invalid role specified");
  }

  return (
    <div className={cn("", className)}>
      <Sidebar>
        <h1 className="text-2xl font-bold mb-4">{role} Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any, _i: any) => (
            <StatsCard
              name={project.name}
              completedTasks={project.completedTasks}
              totalTasks={project.totalTasks}
              progressPercentage={project.progressPercentage}
            />
          ))}
        </div>

        <br />
      </Sidebar>
    </div>
  );
};

export default Dashboard;
