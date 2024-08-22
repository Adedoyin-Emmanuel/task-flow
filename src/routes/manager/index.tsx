import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Member from "@/pages/member";
import Project from "@/pages/project";
import ProjectId from "@/pages/project/projectId";
import Task from "@/pages/task";
import ProtectedRoute from "@/components/protected-route";

const PROJECT_MANAGER_ROLE = "project manager";
export const projectManagerRoutes = [
  <Route
    index
    path=""
    element={
      <ProtectedRoute allowedRole={PROJECT_MANAGER_ROLE}>
        <Dashboard />
      </ProtectedRoute>
    }
  />,
  <Route
    path="dashboard"
    element={
      <ProtectedRoute allowedRole={PROJECT_MANAGER_ROLE}>
        <Dashboard />
      </ProtectedRoute>
    }
    key={"projectManagerDashboard"}
  />,
  <Route
    path="members"
    element={
      <ProtectedRoute allowedRole={PROJECT_MANAGER_ROLE}>
        <Member />
      </ProtectedRoute>
    }
    key={"projectManagerMember"}
  />,

  <Route
    path="projects"
    element={
      <ProtectedRoute allowedRole={PROJECT_MANAGER_ROLE}>
        <Project />
      </ProtectedRoute>
    }
    key={"projectManagerProjects"}
  />,
  <Route
    path="projects/:projectId"
    element={
      <ProtectedRoute allowedRole={PROJECT_MANAGER_ROLE}>
        <ProjectId />
      </ProtectedRoute>
    }
    key={"projectManagerProjectId"}
  />,
  <Route
    path="tasks"
    element={
      <ProtectedRoute allowedRole={PROJECT_MANAGER_ROLE}>
        <Task />
      </ProtectedRoute>
    }
    key={"projectManagerTasks"}
  />,
];
