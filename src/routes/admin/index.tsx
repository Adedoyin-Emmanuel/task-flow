import { Route } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Member from "@/pages/member/";
import Project from "@/pages/project";
import ProjectId from "@/pages/project/projectId";
import Task from "@/pages/task";
import ProtectedRoute from "@/components/protected-route";

const ADMIN_ROLE = "admin";

export const adminRoutes = [
  <Route
    index
    path=""
    element={
      <ProtectedRoute allowedRole={ADMIN_ROLE}>
        <Dashboard />
      </ProtectedRoute>
    }
    key={"adminDashboard01"}
  />,
  <Route
    path="dashboard"
    element={
      <ProtectedRoute allowedRole={ADMIN_ROLE}>
        <Dashboard />
      </ProtectedRoute>
    }
    key={"adminDashboard"}
  />,
  <Route
    path="members"
    element={
      <ProtectedRoute allowedRole={ADMIN_ROLE}>
        <Member />
      </ProtectedRoute>
    }
    key={"adminMember"}
  />,

  <Route
    path="projects"
    element={
      <ProtectedRoute allowedRole={ADMIN_ROLE}>
        <Project />
      </ProtectedRoute>
    }
    key={"adminProjects"}
  />,
  <Route
    path="projects/:projectId"
    element={
      <ProtectedRoute allowedRole={ADMIN_ROLE}>
        <ProjectId />
      </ProtectedRoute>
    }
    key={"adminProjectId"}
  />,
  <Route
    path="tasks"
    element={
      <ProtectedRoute allowedRole={ADMIN_ROLE}>
        <Task />
      </ProtectedRoute>
    }
    key={"adminTasks"}
  />,
];
