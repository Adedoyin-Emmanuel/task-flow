import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";

import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface IProject {
  className?: string;
}

const ProjectId = ({ className }: IProject) => {
  const project = {
    name: "Task Management System",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eius
            similique excepturi consequatur reiciendis, labore explicabo, amet
            quaerat reprehenderit fuga culpa fugit rerum. Saepe cumque similique
            quibusdam! Dignissimos, explicabo amet.`,
    startDate: "2024-07-01",
    endDate: "2024-12-31",
    totalTasks: 100,
    completedTasks: 75,
    members: [
      { name: "Alice Johnson", role: "Project Manager" },
      { name: "Bob Smith", role: "Developer" },
      { name: "Charlie Brown", role: "Tester" },
    ],
  };

  const progress = Math.floor(
    (project.completedTasks / project.totalTasks) * 100
  );

  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <div className={cn("flex flex-col md:flex-row", className)}>
      <Sidebar>
        <br />
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <h2 className="text-xl font-bold">{project.name}</h2>

            <br />
            <p>{project.description}</p>

            <br />

            <Card className="flex flex-col">
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartData}
                      dataKey="visitors"
                      nameKey={"browser"}
                      innerRadius={60}
                      strokeWidth={5}
                      activeIndex={0}
                      activeShape={({
                        outerRadius = 0,
                        ...props
                      }: PieSectorDataItem) => (
                        <Sector {...props} outerRadius={outerRadius + 10} />
                      )}
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing all tasks staus
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-bold">Team Members</h2>

            <div className="border-[1px] rounded-md w-full flex items-center gap-x-3 p-2 cursor-pointer my-2">
              <img
                src={"https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"}
                width={35}
                height={35}
                alt="User profile"
                className="rounded-full"
              />

              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <strong className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Emmysoft
                </strong>
                <p
                  className="text-[13px] text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap
                  "
                >
                  adedoyine535@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ProjectId;
