import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "Fradfoundation";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5abmMwWFJFQUFDQUF6MDk1.S0wqUe-_ve-_vT_vv73vv70c77-9bO-_ve-_ve-_ve-_ve-_ve-_ve-_vXVi77-9Cu-_ve-_ve-_vXTvv73vv70L77-977-9",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "homepage",
      path: "/",
    },
  ],
});
