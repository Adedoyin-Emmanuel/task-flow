import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Report from "@/pages/report";
import UserId from "@/pages/userId";
import Project from "@/pages/project";
import ProjectId from "@/pages/project/projectId";
import Task from "@/pages/task";
import TaskId from "@/pages/task/taskId";

export const adminRoutes = [
  <Route path="/dashboard" element={<Dashboard />} />,
  <Route path="/reports" element={<Report />} />,
  <Route path="/users" element={<>all users</>} />,
  <Route path="/users/:userId" element={<UserId />} />,
  <Route path="/projects" element={<Project />} />,
  <Route path="/projects/:projectId" element={<ProjectId />} />,
  <Route path="/tasks" element={<Task />} />,
  <Route path="/tasks/:taskId" element={<TaskId />} />,
];
