import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { EllipsisVertical } from "lucide-react";
import React from "react";

interface ITask {
  className?: string;
  endDate: string;
  status: "completed" | "in progress" | "overdue" | "pending";
  title: string;
  description: string;
}

const Task = ({ className, endDate, status, title, description }: ITask) => {
  const isOverdue = new Date(endDate) < new Date() && status !== "completed";
  let badge = <></>;

  const [position, setPosition] = React.useState("bottom");

  switch (status) {
    case "completed":
      badge = <Badge className="bg-green-400">{status}</Badge>;
      break;
    case "in progress":
      badge = <Badge className="bg-blue-400">{status}</Badge>;
      break;
    case "overdue":
      badge = <Badge className="bg-red-400">{status}</Badge>;
      break;
    case "pending":
      badge = <Badge className="bg-yellow-400">{status}</Badge>;
      break;
    default:
      throw new Error("Invalid task status specified");
  }

  return (
    <div
      className={cn(
        `border rounded-md p-2 cursor-pointer ${isOverdue && "bg-red-50"} my-2`,
        className
      )}
    >
      <div className="w-full flex items-center justify-between">
        {badge}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <EllipsisVertical strokeWidth={1.5} size={25} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Task Optionss</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="top">
                View Task
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Edit Task
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">
                Mark as completed
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="my-2">
        <h3 className="font-bold text-[1.1rem]">{title}</h3>
        <p className="text-[13px] text-gray-500 my-2">{description}</p>
      </div>

      <Separator />

      <div className="my-1">
        <img
          src={"https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"}
          width={35}
          height={35}
          alt="User profile"
          className="mx-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Task;
