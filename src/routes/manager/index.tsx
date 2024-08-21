import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import UserId from "@/pages/userId";
import Project from "@/pages/project";
import ProjectId from "@/pages/project/projectId";
import Task from "@/pages/task";
import TaskId from "@/pages/task/taskId";

export const projectManagerRoutes = [
  <Route index path="" element={<Dashboard />} />,
  <Route path="dashboard" element={<Dashboard />} key={"projectManagerDashboard"} />,
  <Route path="users" element={<>all users</>} key={"projectManagerAllUsers"} />,
  <Route path="users/:userId" element={<UserId />} key={"projectManagerUserId"} />,
  <Route path="projects" element={<Project />} key={"projectManagerProjects"} />,
  <Route
    path="projects/:projectId"
    element={<ProjectId />}
    key={"projectManagerProjectId"}
  />,
  <Route path="tasks" element={<Task />} key={"projectManagerTasks"} />,
  <Route path="tasks/:taskId" element={<TaskId />} key={"projectManagerTasks"} />,
];
