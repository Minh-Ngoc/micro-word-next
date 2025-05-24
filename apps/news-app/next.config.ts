import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const configPath = path.resolve(__dirname, "../admin/app-map.json");
const CURRENT_APP = "news-app";

type AppType = {
  name: string;
  port: number;
  route: string;
};

let appMap: AppType[] = [];

// Đọc file app-map.json
try {
  appMap = JSON.parse(fs.readFileSync(configPath, "utf-8"));
} catch (error) {
  console.log("⚠️ Không đọc được file cấu hình app-map.json", error);
}

const mainApp = appMap?.find((app: AppType) => app.name === CURRENT_APP);

const getBasePath = () => {
  if (mainApp?.route === "/") return "";

  return mainApp?.route || "";
};

console.log('getBasePath: ', getBasePath())

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: getBasePath(),
};

export default nextConfig;
