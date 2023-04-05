import * as React from "react";

import Navbar from "./navbar";
import SubNavbar from "./sub-navbar";
import { AuthContext } from "../../pages/context/AuthContext";

export default function Layout(props) {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AuthContext);

  React.useEffect(
    () => setIsAuthenticated(localStorage.getItem("auth")),
    [setIsAuthenticated]
  );

  return (
    <div>
      {isAuthenticated && (
        <div>
          <Navbar />
          <SubNavbar />
        </div>
      )}
      {props.children}
    </div>
  );
}
