import { Box, EllipsisVertical } from "lucide-react";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IStatsCard {
  className?: string;
  name: string;
  progressPercentage: number;
  totalTasks: number;
  completedTasks: number;
  showDropDown?: boolean;
  id?: string;
}

const StatsCard = ({
  className,
  name,
  progressPercentage,
  totalTasks,
  completedTasks,
  showDropDown = false,
  id,
}: IStatsCard) => {
  const generateReport = async (projectId: string) => {
    location.href = `http://localhost:8000/api/report/project/${projectId}`;
  };

  const icon = showDropDown ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical strokeWidth={1.6} size={30} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Project Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            generateReport(id as string);
          }}
        >
          Generate Report
        </DropdownMenuItem>
        <DropdownMenuItem>View Project</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Box strokeWidth={1} size={30} />
  );

  return (
    <section
      className={cn("w-full border rounded-md p-4 cursor-pointer", className)}
    >
      <section className="flex items-center justify-between">
        <h1 className="text-[1.3rem] font-extrabold">{name}</h1>

        <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
          {icon}
        </div>
      </section>

      <p className="mt-2 text-sm">
        {completedTasks}/{totalTasks} Tasks completed
      </p>

      <Progress value={progressPercentage} className="h-2 mt-5 mb-3" />

      <p className="text-right text-sm text-gray-500 mt-1">
        {progressPercentage}% Progress
      </p>
    </section>
  );
};

export default StatsCard;
