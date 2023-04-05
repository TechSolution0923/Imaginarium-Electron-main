import * as React from "react";
import { useLocation } from "react-router-dom";
import DashboardSubNavbar from "./components/DashboardSubNavbar";
import NewProjectSubNavbar from "./components/NewProjectSubNavbar";
import EditSubNavbar from "./components/EditSubNavbar";
import ProfileSubNavbar from "./components/ProfileSubNavbar";
import WorkSpaceNavbar from "./components/WorkSpaceNavbar";

export default function SubNavbar() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/dashboard" && <DashboardSubNavbar />}
      {location.pathname === "/project/new" && <NewProjectSubNavbar />}
      {location.pathname === "/project/edit" && <EditSubNavbar />}
      {location.pathname === "/profile" && <ProfileSubNavbar />}
      {location.pathname === "/workspace" && <WorkSpaceNavbar />}
    </>
  );
}
