import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Report from "@/pages/report";
import Member from "@/pages/member/";
import Project from "@/pages/project";
import ProjectId from "@/pages/project/projectId";
import Task from "@/pages/task";
import TaskId from "@/pages/task/taskId";
import MemberId from "@/pages/member/memberId";

export const adminRoutes = [
  <Route index path="" element={<Dashboard />} key={"adminDashboard01"} />,
  <Route path="dashboard" element={<Dashboard />} key={"adminDashboard"} />,
  <Route path="reports" element={<Report />} key={"adminReports"} />,
  <Route path="members" element={<Member />} key={"adminMember"} />,
  <Route path="members/:memberId" element={<MemberId />} key={"adminMemberId"} />,
  <Route path="projects" element={<Project />} key={"adminProjects"} />,
  <Route
    path="projects/:projectId"
    element={<ProjectId />}
    key={"adminProjectId"}
  />,
  <Route path="tasks" element={<Task />} key={"adminTasks"} />,
  <Route path="tasks/:taskId" element={<TaskId />} key={"adminTasks"} />,
];
