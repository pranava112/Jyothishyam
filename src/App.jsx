import React from "react";
import { RouterProvider } from "react-router-dom";
import { routing } from "./Routing";

const App = () => {
  return (
  <>
   <RouterProvider router={routing} />;
  </>
 );
};

export default App;
