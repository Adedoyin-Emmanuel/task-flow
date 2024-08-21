import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<>Hello world</>} />
        <Route path="/about" element={<></>} />

        <Route path="/auth">
          <Route path="/login" element={<>Login</>} />
          <Route path="/signup" element={<>Signup</>} />
        </Route>

        <Route path="/admin">
          <Route path="/users" element={<>Users page</>} />
          <Route path="/users/:userId" element={<>User Details</>} />
          <Route path="/reports"/>
        </Route>  


        <Route path="/manager">
          <Route path="/projects" element={<>Projects</>} />
          <Route path="/projects/:projectId" element={<>Project Details</>} />
          <Route path="/projects/:projectId/edit" element={<>Project Details Edit</>} />
          <Route path="/reports" />
          <Route path="/tas"/>
        </Route>

        <Route path="/projects">
          <Route path="/:projectId" element={<>Project Details</>} />
          <Route path="/:projectId/edit" element={<>Project Details Edit</>} />
          <Route path="/:projectId/edit" element={<>Project Details Edit</>} />
        </Route>

        <Route path="/dashboard">
          <Route path="/profile" element={<>Profile</>} />
          <Route path="/settings" element={<>Settings</>} />
        </Route>

        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
