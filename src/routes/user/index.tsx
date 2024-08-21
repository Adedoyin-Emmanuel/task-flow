import Me from "@/pages/me";
import Task from "@/pages/task";
import Project from "@/pages/project";
import TaskId from "@/pages/task/taskId";
import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import ProjectId from "@/pages/project/projectId";

export const userRoutes = [
  <Route path="/dashboard" element={<Dashboard />} key={"dashboard"} />,
  <Route path="/me" element={<Me />} key={"me"} />,
  <Route path="/projects" element={<Project />} key={"project"} />,
  <Route
    path="/projects/:projectId"
    element={<ProjectId />}
    key={"projectId"}
  />,
  <Route path="/tasks" element={<Task />} key={"task"} />,
  <Route path="/tasks/:taskId" element={<TaskId />} key={"taskId"} />,
];
