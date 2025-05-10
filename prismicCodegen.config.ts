import type { Config } from "prismic-ts-codegen";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const config: Config = {
  output: "./types.generated.ts",
  repositoryName: "csced-nigeria",
  customTypesAPIToken: process.env.VITE_PRISMIC_CUSTOM_TYPES_BEARER_TOKEN,
  models: {
    fetchFromRepository: true,
  },
  clientIntegration: {
    includeCreateClientInterface: true,
  },
};

export default config;
