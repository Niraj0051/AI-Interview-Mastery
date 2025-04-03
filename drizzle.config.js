/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mock-interview-simulation_owner:AWPQVJ3m8sEO@ep-divine-block-a532d3dg.us-east-2.aws.neon.tech/mock-interview-simulation?sslmode=require',
    }
  };