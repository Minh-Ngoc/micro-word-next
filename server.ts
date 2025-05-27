import Fastify, { DoneFuncWithErrOrRes, FastifyReply, FastifyRequest } from "fastify";
import proxy from "@fastify/http-proxy";
import fs from "fs";
import path from "path";

// Fix __dirname for ES modules

const fastify = Fastify();

type AppType = {
    name: string;
    port: number;
    route: string;
};

// Load app-map.json
// const appMapPath = path.join(__dirname, "./apps/admin/app-map.json");
const appMapPath = path.join(process.cwd(), 'apps/admin/app-map.json');

let appMap: AppType[];

try {
    appMap = JSON.parse(fs.readFileSync(appMapPath, "utf-8"));
} catch (e) {
    console.error("❌ Failed to read app-map.json", e);
    process.exit(1);
}

const subApps = appMap?.filter((app: AppType) => app.route !== '/');
const mainApp = appMap?.find((app: AppType) => app.route === '/');

// Đăng ký từng subApp
subApps.forEach(({ route, port, name }) => {
    const prefix = route.startsWith("/") ? route : `/${route}`;
    const upstream = `http://localhost:${port}`;

    fastify.register(proxy as any, {
        prefix,
        upstream,
        rewritePrefix: prefix,
        http2: false,
        preHandler: (req: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes) => {
            console.log(`[${name}] ${req.method} ${req.url} from ${req.ip}`);
            done();
        },
    });

    console.log(`➡️ Proxy ${prefix} -> ${name} (${port})`);
});

// Cuối cùng: proxy "/" về mainApp
fastify.register(proxy as any, {
    upstream: `http://localhost:${(mainApp?.port)}`,
    replyOptions: {
        rewriteRequestPath: (reqPath: string) => reqPath, // giữ nguyên path
    },
    preHandler: (req: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes) => {
        console.log(`[main-app] ${req.method} ${req.url} from ${req.ip}`);
        done();
    },
});

fastify.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
    console.log("🚀 Proxy server running on http://localhost:3000");
});
