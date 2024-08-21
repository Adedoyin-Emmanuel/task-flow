import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";

interface IProject {
  className?: string;
  role: "admin" | "team member" | "project manager";
}

const Project = ({ className, role }: IProject) => {
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
        <h2 className="text-2xl font-bold capitalize">Projects</h2>
      </Sidebar>
    </div>
  );
};

export default Project;
