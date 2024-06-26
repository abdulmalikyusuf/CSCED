import React from "react";
import ReactDOM from "react-dom/client";
import { PrismicProvider } from "@prismicio/react";

import App from "@/App.tsx";
import { client } from "@/prismic";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);
