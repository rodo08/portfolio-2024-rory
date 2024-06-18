import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import HomeView from "../Views/homeView/HomeView";
import WebProjectsView from "../Views/webProjectsView/WebProjectsView";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "web-projects",
        element: <WebProjectsView />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
