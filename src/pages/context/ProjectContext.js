import { createContext } from "react";

export const ProjectContext = createContext({
  currentProjectType: 1,
  selected: "Recent",
  setCurrentProjectType: () => {},
  setSelected: () => {},
});
