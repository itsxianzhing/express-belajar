import "dotenv/config";
import { definePrismaConfig, defineConfig, env } from "prisma/config";

export default definePrismaConfig({
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
});

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations"
  },
  datasource: {
    url: env("DATABASE_URL")
  }
});