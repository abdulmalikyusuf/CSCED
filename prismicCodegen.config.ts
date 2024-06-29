import type { Config } from "prismic-ts-codegen";

const config: Config = {
  output: "./types.generated.ts",
  repositoryName: "fradfoundation",
  customTypesAPIToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
  models: {
    fetchFromRepository: true,
  },
  clientIntegration: {
    includeCreateClientInterface: true,
  },
};

export default config;
