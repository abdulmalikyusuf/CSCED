import {
  createRouter,
  createRoute,
} from '@tanstack/react-router'

import { rootRoute } from "./routes/root";
import { aboutRoute } from "./routes/about-us";
import OurMission from "./routes/our-mission";
import TheTeam from "./routes/the-team";
import ContactUs from "./routes/contact-us";
import { indexRoute } from "./routes";
import "./App.css";


const missionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-mission',
  component: OurMission,
})
const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-team',
  component: TheTeam,
})
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-us',
  component: ContactUs,
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, missionRoute, teamRoute, contactRoute])

export const router = createRouter({ routeTree })