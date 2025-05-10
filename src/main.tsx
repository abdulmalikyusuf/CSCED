import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { PrismicProvider } from "@prismicio/react";
import { RouterProvider } from '@tanstack/react-router'

import { router } from "@/App.tsx";
import { client } from "@/prismic";

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <PrismicProvider client={client}>
        <RouterProvider router={router} />
      </PrismicProvider>
    </StrictMode>,
  )
}