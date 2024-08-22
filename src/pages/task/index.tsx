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

interface ITask {
  className?: string;
}

const Task = ({ className }: ITask) => {
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [showCreateTaskDialog, setCreateTaskDialog] = React.useState(false);

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
            <TaskComponent
              key={_i}
              title={task.title}
              status={task.status as any}
              endDate={task.endDate}
              description={task.description}
            />
          ))}
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
