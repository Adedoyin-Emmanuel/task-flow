import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import { FolderPlus, ListFilter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TaskComponent from "@/components/task";
import React from "react";
import { Button } from "@/components/ui/button";
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
import { Axios } from "@/config/axios";
import Loader from "@/components/loader";
import { toast } from "sonner";

interface ITask {
  className?: string;
}

const Task = ({ className }: ITask) => {
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [showCreateTaskDialog, setCreateTaskDialog] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [allTasks, setAllTasks] = React.useState([]);

  const filteredTasks = allTasks.filter((task: any) => {
    if (statusFilter === "all") return allTasks;
    return task.status === statusFilter;
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("/api/task");
        setAllTasks(response.data.data);
      } catch (error: any) {
        toast.error(error.response?.data.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const CreateTaskDialog = () => {
    return (
      <Dialog open={showCreateTaskDialog} onOpenChange={setCreateTaskDialog}>
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
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
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
              <TaskComponent
                key={_i}
                title={task.name}
                status={task.status as any}
                endDate={task.endDate}
                description={task.description}
              />
            ))
          ) : (
            <p className="text-sm capitalize">No tasks found!</p>
          )}
        </div>
      </Sidebar>

      <CreateTaskDialog />

      <section className="fixed bottom-20 right-10">
        <section
          className={`w-16 h-16 flex items-center justify-center  bg-gray-50 rounded-full shadow cursor-pointer relative transform-gpu transition-transform duration-200 scale-100 hover:scale-110 ${className}`}
          onClick={() => {
            setCreateTaskDialog(true);
          }}
        >
          <FolderPlus className="h-10 w-10 " strokeWidth={1.2} />
        </section>
      </section>
    </div>
  );
};

export default Task;
