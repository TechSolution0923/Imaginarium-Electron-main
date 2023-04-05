import { createContext } from "react";

export const LocationContext = createContext({
  selectedLocation: {},
  filteredLocations: {},
  setSelectedLocation: () => {},
  setFilteredLocations: () => {}
});
