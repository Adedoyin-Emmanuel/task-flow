import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import StatsCard from "@/components/stats-card";
import { Button } from "@/components/ui/button";
import { FolderPlus } from "lucide-react";
import useAuth from "@/store/useAuth";
import { Navigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Axios } from "@/config/axios";
import { toast } from "sonner";
import Loader from "@/components/loader";

interface IProject {
  className?: string;
}

const Project = ({ className }: IProject) => {
  let projects: any = [];
  const [showCreateProjectDialog, setCreateProjectDialog] =
    React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [allProjects, setAllProjects] = React.useState([]);

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

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  const { role } = user;

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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("/api/dashboard/overview");

        setAllProjects(response.data.data);

        console.log(response.data.data);
      } catch (error: any) {
        toast.error(error.response?.data.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const CreateProjectDialog = () => {
    return (
      <Dialog
        open={showCreateProjectDialog}
        onOpenChange={setCreateProjectDialog}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className={cn("", className)}>
      <Sidebar>
        <Loader loading={loading} />
        <h2 className="text-2xl font-bold capitalize mb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.length > 0 ? (
            allProjects.map((project: any, _i: any) => (
              <StatsCard
                name={project.project.name}
                completedTasks={project.completed_tasks}
                totalTasks={project.total_tasks}
                progressPercentage={project.progress}
                showDropDown={true}
              />
            ))
          ) : (
            <p className="text-sm capitalize">No projects found!</p>
          )}
        </div>
        <br />
        <CreateProjectDialog />
        <Button
          onClick={() => {
            setCreateProjectDialog(true);
          }}
          className="flex items-center gap-x-2"
        >
          <FolderPlus size={22} strokeWidth={1.2} />
          Create a new project
        </Button>
      </Sidebar>
    </div>
  );
};

export default Project;
