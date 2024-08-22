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
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IProject {
  className?: string;
}

const Project = ({ className }: IProject) => {
  const [showCreateProjectDialog, setCreateProjectDialog] =
    React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [allProjects, setAllProjects] = React.useState([]);
  const [projectManagers, setProjectManagers] = React.useState([]);
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("/api/dashboard/overview");
        const response2 = await Axios.get("/api/user/project-managers");

        setAllProjects(response.data.data);
        setProjectManagers(response2.data.data);
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
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>Create a new project.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 w-full">
            <div className="my-1">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value=""
                className="col-span-3"
                placeholder="Enter project name"
              />
            </div>

            <div className="my-1">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Textarea
                placeholder="Enter project description"
                rows={3}
                className="w-full"
              />
            </div>

            <div className="my-1">
              <Label htmlFor="startDate" className="text-right">
                Start Date
              </Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? (
                      format(startDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="my-1">
              <Label htmlFor="endDate" className="text-right">
                End Date
              </Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? (
                      format(endDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="my-1">
              <Label htmlFor="projectManager" className="text-right">
                Select Project Manager
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a project manager</SelectLabel>

                    {projectManagers.map((manager: any, _i: any) => (
                      <SelectItem value={manager.name} key={_i}>
                        {manager.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create project</Button>
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
