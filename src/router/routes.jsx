import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomeView from "../Views/homeView/HomeView";
import WebProjectsView from "../Views/webProjectsView/WebProjectsView";
import DesignSamples from "../components/designSamples/DesignSample";
import PizzaHutSamples from "../components/designSamples/PizzaHutSamples";
import EntelSamples from "../components/designSamples/EntelSamples";
import TenaSamples from "../components/designSamples/TenaSamples";
import AboutMeView from "../Views/aboutMeview/AboutMeView";
import ContactView from "../Views/contactView/ContactView";
import DesignWorksView from "../Views/designWorksView/DesignWorksView";
import LorealSamples from "../components/designSamples/LorealSamples";
import GreenLionSamples from "../components/designSamples/GreenLionSamples";

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
        path: "about-me",
        element: <AboutMeView />,
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
            element: <PizzaHutSamples />,
          },
          {
            path: "tena",
            element: <TenaSamples />,
          },
          {
            path: "loreal",
            element: <LorealSamples />,
          },
          {
            path: "fridays",
            element: <DesignSamples />,
          },
          {
            path: "entel",
            element: <EntelSamples />,
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
            element: <GreenLionSamples />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactView />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
