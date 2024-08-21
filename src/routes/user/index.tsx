import Me from "@/pages/me";
import Task from "@/pages/task";
import Project from "@/pages/project";
import TaskId from "@/pages/task/taskId";
import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import ProjectId from "@/pages/project/projectId";

export const userRoutes = [
  <Route path="" element={<Dashboard />} />,
  <Route path="/me" element={<Me />} />,
  <Route path="/project" element={<Project />} />,
  <Route path="/project/:projectId" element={<ProjectId />} />,
  <Route path="/tasks" element={<Task />} />,
  <Route path="/tasks/:taskId" element={<TaskId />} />,
];
