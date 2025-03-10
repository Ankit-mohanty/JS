import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Practice } from "./practice";
import {App} from './App.jsx'
// import Profile from "./components/profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Practice /> */}
    {/* <Profile/> */}
  </StrictMode>
);
 