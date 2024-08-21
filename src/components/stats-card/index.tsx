import { Box } from "lucide-react";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";

interface IStatsCard {
  className?: string;
  name: string;
  progressPercentage: number;
  totalTasks: number;
  completedTasks: number;
}

const StatsCard = ({
  className,
  name,
  progressPercentage,
  totalTasks,
  completedTasks,
}: IStatsCard) => {
  return (
    <section
      className={cn("w-full border rounded-md p-4 cursor-pointer", className)}
    >
      <section className="flex items-center justify-between">
        <h1 className="text-[1.3rem] font-extrabold">{name}</h1>

        <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
          <Box strokeWidth={1} size={30} />
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
