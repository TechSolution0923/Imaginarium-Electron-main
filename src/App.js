import React, { useState, useMemo} from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";

// context
import { AuthContext } from "./pages/context/AuthContext";
import { ProjectContext } from "./pages/context/ProjectContext";
import { LocationContext } from "./pages/context/LocationContext";

// fetch json data
import { Locations } from "./components/pages/workspace/location-editor/data/Locations";

import Layout from "./components/layout";

import Onboard from "./pages/onboard/Onboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetEmail from "./pages/auth/ResetEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import NewProject from "./pages/project/NewProject";
import EditProject from "./pages/project/EditProject";
import Profile from "./pages/user/Profile";
import Workspace from "./pages/workspace/Workspace";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Onboard /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/reset-email", element: <ResetEmail /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/project/new", element: <NewProject /> },
    { path: "/project/edit", element: <EditProject /> },
    { path: "/profile", element: <Profile /> },
    { path: "/workspace", element: <Workspace /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selected, setSelected] = React.useState("");
  const [currentProjectType, setCurrentProjectType] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState(Locations);

  const value = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated]
  );
  const project = useMemo(
    () => ({
      currentProjectType,
      selected,
      setCurrentProjectType,
      setSelected,
    }),
    [currentProjectType, selected]
  );

  const location = useMemo(() => ({
    selectedLocation,
    setSelectedLocation,
    filteredLocations,
    setFilteredLocations,
  }), [selectedLocation, filteredLocations]);

  return (
    <Router>
      <AuthContext.Provider value={value}>
        <ProjectContext.Provider value={project}>
          <LocationContext.Provider value={location}>
            <Layout>
              <App />
            </Layout>
          </LocationContext.Provider>
        </ProjectContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};

export default AppWrapper;
