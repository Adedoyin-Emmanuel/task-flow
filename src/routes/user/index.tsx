import Me from "@/pages/me";
import Task from "@/pages/task";
import Project from "@/pages/project";
import TaskId from "@/pages/task/taskId";
import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import ProjectId from "@/pages/project/projectId";

export const userRoutes = [
  <Route path="/dashboard" element={<Dashboard />} />,
  <Route path="/me" element={<Me />} />,
  <Route path="/projects" element={<Project />} />,
  <Route path="/projects/:projectId" element={<ProjectId />} />,
  <Route path="/tasks" element={<Task />} />,
  <Route path="/tasks/:taskId" element={<TaskId />} />,
];
