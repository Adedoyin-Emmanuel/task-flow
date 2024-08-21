import { Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface IStatsCard {
  className?: string;
}

const StatsCard = ({ className }: IStatsCard) => {
  return (
    <section
      className={cn(
        "lg:w-72 w-full border rounded-md p-4 cursor-pointer",
        className
      )}
    >
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">20</h1>

        <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
          <Video strokeWidth={1} size={30} />
        </div>
      </section>
      <p className="mt-2">20+ appointments</p>
    </section>
  );
};

export default StatsCard;
