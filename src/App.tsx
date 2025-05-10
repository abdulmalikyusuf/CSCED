import {
  createRouter,
  createRoute,
} from '@tanstack/react-router'

import { rootRoute } from "./routes/root";
import { aboutRoute } from "./routes/about-us";
import { ourMissionRoute } from "./routes/our-mission";
import { teamRoute } from "./routes/the-team";
import { contactRoute } from "./routes/contact-us";
import { indexRoute } from "./routes";
import "./App.css";


const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, ourMissionRoute, teamRoute, contactRoute])

export const router = createRouter({ routeTree })