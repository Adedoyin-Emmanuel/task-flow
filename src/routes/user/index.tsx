import Me from "@/pages/me";
import Task from "@/pages/task";
import Project from "@/pages/project";
import TaskId from "@/pages/task/taskId";
import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import ProjectId from "@/pages/project/projectId";
import Member from "@/pages/member";
import ProtectedRoute from "@/components/protected-route";

const USER_ROLE = "team member";

export const userRoutes = [
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute allowedRole={USER_ROLE}>
        <Dashboard role={USER_ROLE} />
      </ProtectedRoute>
    }
    key={"dashboard"}
  />,
  <Route
    path="/me"
    element={
      <ProtectedRoute allowedRole={USER_ROLE}>
        <Me />
      </ProtectedRoute>
    }
    key={"me"}
  />,
  <Route
    path="/projects"
    element={
      <ProtectedRoute allowedRole={USER_ROLE}>
        <Project role={USER_ROLE} />
      </ProtectedRoute>
    }
    key={"project"}
  />,
  <Route
    path="/projects/:projectId"
    element={
      <ProtectedRoute allowedRole={USER_ROLE}>
        <ProjectId />
      </ProtectedRoute>
    }
    key={"projectId"}
  />,
  <Route
    path="/tasks"
    element={
      <ProtectedRoute allowedRole={USER_ROLE}>
        <Task />
      </ProtectedRoute>
    }
    key={"task"}
  />,
  <Route
    path="/tasks/:taskId"
    element={
      <ProtectedRoute allowedRole={USER_ROLE}>
        <TaskId />
      </ProtectedRoute>
    }
    key={"taskId"}
  />,
  <Route
    path="/members"
    element={
      <ProtectedRoute allowedRole={USER_ROLE}>
        <Member />
      </ProtectedRoute>
    }
    key={"member"}
  />,
];
