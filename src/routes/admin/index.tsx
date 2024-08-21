import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Report from "@/pages/report";
import UserId from "@/pages/userId";
import Project from "@/pages/project";
import ProjectId from "@/pages/project/projectId";
import Task from "@/pages/task";
import TaskId from "@/pages/task/taskId";

export const adminRoutes = [
  <Route index path="" element={<Dashboard />} />,
  <Route path="dashboard" element={<Dashboard />} key={"adminDashboard"} />,
  <Route path="reports" element={<Report />} key={"adminReports"} />,
  <Route path="users" element={<>all users</>} key={"adminAllUsers"} />,
  <Route path="users/:userId" element={<UserId />} key={"adminUserId"} />,
  <Route path="projects" element={<Project />} key={"adminProjects"} />,
  <Route
    path="projects/:projectId"
    element={<ProjectId />}
    key={"adminProjectId"}
  />,
  <Route path="tasks" element={<Task />} key={"adminTasks"} />,
  <Route path="tasks/:taskId" element={<TaskId />} key={"adminTasks"} />,
];
