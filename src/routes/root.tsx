import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from "@/components/header";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import ErrorPage from './error-page';

export const rootRoute = createRootRoute({
  errorComponent: ErrorPage,
  component: RootLayout,
})


function RootLayout() {
  return (
    <>
      <Banner />
      <Header />
      <main className="bg-white min-h-screen">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
