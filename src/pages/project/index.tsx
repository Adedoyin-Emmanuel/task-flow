import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";

interface IProject {
  className?: string;
}

const Project = ({ className }: IProject) => {
  return (
    <div className={cn("", className)}>
      <Sidebar>
        <h2 className="text-2xl font-bold capitalize">Projects</h2>
      </Sidebar>
    </div>
  );
};

export default Project;
