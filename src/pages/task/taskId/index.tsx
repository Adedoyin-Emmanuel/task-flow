import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";

interface ITask {
  className?: string;
}

const TaskId = ({ className }: ITask) => {
  return (
    <div className={cn("", className)}>
      <Sidebar>
        <h2 className="text-2xl font-bold capitalize">Task Id</h2>
      </Sidebar>
    </div>
  );
};

export default TaskId;
