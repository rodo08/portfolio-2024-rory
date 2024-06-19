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
          {
            path: "tena",
            element: <DesignSamples />,
          },
          {
            path: "loreal",
            element: <DesignSamples />,
          },
          {
            path: "fridays",
            element: <DesignSamples />,
          },
          {
            path: "entel",
            element: <DesignSamples />,
          },
          {
            path: "mamut",
            element: <DesignSamples />,
          },
          {
            path: "schopdog",
            element: <DesignSamples />,
          },
          {
            path: "banco-estado",
            element: <DesignSamples />,
          },
          {
            path: "udla",
            element: <DesignSamples />,
          },
          {
            path: "ventisquero",
            element: <DesignSamples />,
          },
          {
            path: "capel",
            element: <DesignSamples />,
          },
          {
            path: "green-lion",
            element: <DesignSamples />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
