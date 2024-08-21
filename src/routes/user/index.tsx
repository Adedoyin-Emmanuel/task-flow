import Me from "@/pages/me";
import Task from "@/pages/task";
import Project from "@/pages/project";
import TaskId from "@/pages/task/taskId";
import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import ProjectId from "@/pages/project/projectId";
import Member from "@/pages/member";
import MemberId from "@/pages/member/memberId";

export const userRoutes = [
  <Route
    path="/dashboard"
    element={<Dashboard role="team member" />}
    key={"dashboard"}
  />,
  <Route path="/me" element={<Me />} key={"me"} />,
  <Route
    path="/projects"
    element={<Project role="team member" />}
    key={"project"}
  />,
  <Route
    path="/projects/:projectId"
    element={<ProjectId />}
    key={"projectId"}
  />,
  <Route path="/tasks" element={<Task />} key={"task"} />,
  <Route path="/tasks/:taskId" element={<TaskId />} key={"taskId"} />,
  <Route path="/members" element={<Member />} key={"member"} />,
  <Route path="/members/:memberId" element={<MemberId />} key={"memberId"} />,
];
