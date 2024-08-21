import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";

interface IMember {
  className?: string;
}

const Member = ({ className }: IMember) => {
  return (
    <div className={cn("", className)}>
      <Sidebar>
        <h2 className="text-2xl font-bold capitalize">Members</h2>
      </Sidebar>
    </div>
  );
};

export default Member;
