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
  const [statusFilter, setStatusFilter] = React.useState("all");
  const { user } = useAuth();
  const [data, setData] = React.useState([]);
  const [allTasks, setAllTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("/api/dashboard/overview");
        const response2 = await Axios.get("/api/task/");

        setAllTasks(response2.data.data);

        console.log(response2.data.data);
        setData(response.data.data);
      } catch (error: any) {
        toast.error(error.response?.data.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTasks = allTasks.filter((task: any) => {
    if (statusFilter === "all") return allTasks;
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
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task: any, _i) => (
              <Task
                key={_i}
                title={task.name}
                status={task.status as any}
                endDate={task.end_date}
                description={task.description}
              />
            ))
          ) : (
            <p className="text-sm capitalize">No tasks found</p>
          )}
        </div>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
