import * as prismic from "@prismicio/client";

export const client = prismic.createClient("csced-nigeria", {
  accessToken: import.meta.env.VITE_PRISMIC_CUSTOM_TYPES_BEARER_TOKEN,
  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "index",
      path: "/",
    },
  ],
});
