import { defineConfig,devices } from "@playwright/test";
export default defineConfig({testDir:"./tests/e2e",fullyParallel:true,webServer:{command:"pnpm dev",url:"http://localhost:3000",reuseExistingServer:true},use:{baseURL:"http://localhost:3000",trace:"on-first-retry"},projects:[{name:"desktop",use:{...devices["Desktop Chrome"]}},{name:"mobile",use:{...devices["Pixel 7"]}}]});
