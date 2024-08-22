import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import StatsCard from "@/components/stats-card";
import Task from "@/components/task";
import React from "react";
import { ListFilter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "@/store/useAuth";
import { Navigate } from "react-router-dom";
import { Axios } from "@/config/axios";
import { toast } from "sonner";
import Loader from "@/components/loader";

interface IDashboard {
  className?: string;
}

const Dashboard = ({ className }: IDashboard) => {
  let projects: any = [];
  const [statusFilter, setStatusFilter] = React.useState("all");
  const { user } = useAuth();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  const { role } = user;

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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("/api/dashboard/overview");

        console.log(response.data.data[0]);
        setData(response.data.data);
      } catch (error: any) {
        toast.error(error.response?.data.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const tasks = [
    {
      id: 1,
      title: "Design homepage",
      description:
        "Create the initial design and layout for the website's homepage.",
      status: "completed",
      endDate: "2024-08-18",
    },
    {
      id: 2,
      title: "Develop login feature",
      description:
        "Implement the login functionality, including user authentication and form validation.",
      status: "in progress",
      endDate: "2024-08-22",
    },
    {
      id: 3,
      title: "Fix bugs in dashboard",
      description:
        "Resolve existing bugs in the dashboard interface and improve performance.",
      status: "overdue",
      endDate: "2024-08-15",
    },
    {
      id: 4,
      title: "Fix bugs in API",
      description:
        "Identify and fix bugs in the API to ensure smooth data retrieval and interaction.",
      status: "pending",
      endDate: "2024-08-15",
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (statusFilter === "all") return tasks;
    return task.status === statusFilter;
  });

  return (
    <div className={cn("", className)}>
      <Sidebar>
        <Loader loading={loading} />
        <h1 className="text-[1.2rem] font-bold mb-4 capitalize">
          Hi {user.name} 👋
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((data: any, _i: any) => (
            <StatsCard
              name={data.project.name}
              completedTasks={data.completed_tasks}
              totalTasks={data.total_tasks}
              progressPercentage={data.progress}
            />
          ))}
        </div>

        <br />

        <h1 className="text-2xl font-bold mb-4 capitalize flex items-center gap-x-2">
          Tasks
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ListFilter
                strokeWidth={2}
                size={23}
                className="cursor-pointer
          "
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Task Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <DropdownMenuRadioItem value="pending">
                  Pending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="completed">
                  Completed
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="in progress">
                  In Progress
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="overdue">
                  Overdue
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-4">
          {filteredTasks.map((task, _i) => (
            <Task
              key={_i}
              title={task.title}
              status={task.status as any}
              endDate={task.endDate}
              description={task.description}
            />
          ))}
        </div>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
