import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import HomeView from "../Views/homeView/HomeView";
import WebProjectsView from "../Views/webProjectsView/WebProjectsView";
import DesignWorksView from "../Views/designWorksView/DesignWorksView";

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
      {
        path: "design-works",
        element: <DesignWorksView />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
