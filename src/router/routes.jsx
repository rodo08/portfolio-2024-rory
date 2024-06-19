import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import HomeView from "../Views/homeView/HomeView";
import WebProjectsView from "../Views/webProjectsView/WebProjectsView";
import DesignWorksView from "../Views/designWorksView/DesignWorksView";
import DesignSamples from "../components/designSamples/DesignSample";
import { Outlet } from "react-router-dom";

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
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <DesignWorksView />,
          },
          {
            path: "pizza-hut",
            element: <DesignSamples />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
