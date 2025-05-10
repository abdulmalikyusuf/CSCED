import type { Config } from "prismic-ts-codegen";

const config: Config = {
  output: "./types.generated.ts",
  repositoryName: "csced-nigeria",
  customTypesAPIToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImNzY2VkLW5pZ2VyaWEtNjIxMDdlYjktODA0YS00YWI2LWEzZmEtYmE5NjAwZTk2NmU1XzUiLCJkYXRlIjoxNzQ2NDIzOTQxLCJkb21haW4iOiJjc2NlZC1uaWdlcmlhIiwiYXBwTmFtZSI6IkNTQ0VEIE5pZ2VyaWEiLCJpYXQiOjE3NDY0MjM5NDF9.p0_jFyedPctO97VEAIcTJIUc2n1bBSDl5oK6grnEpa0",
  // accessToken: import.meta.env.VITE_PRISMIC_PERMANENT_ACCESS_TOKEN,
  models: {
    fetchFromRepository: true,
  },
  clientIntegration: {
    includeCreateClientInterface: true,
  },
};

export default config;
