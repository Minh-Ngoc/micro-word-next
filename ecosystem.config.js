module.exports = {
    apps: [
        {
            name: 'proxy-server',
            script: 'dist/server.js', // proxy-server build output
            watch: ['apps/admin/app-map.json'], // watch config để restart gateway
            ignore_watch: ['node_modules'],
            watch_delay: 1000,
            env: {
                NODE_ENV: 'production',
            },
        },
        {
            name: 'main-app',
            script: 'node_modules/.bin/next',
            args: 'start',
            cwd: 'apps/main-app',
            watch: false, // production mode không watch
            env: {
                NODE_ENV: 'production',
            },
        },
        {
            name: 'news-app',
            script: 'node_modules/.bin/next',
            args: 'start',
            cwd: 'apps/news-app',
            watch: false,
            env: {
                NODE_ENV: 'production',
            },
        },
        {
            name: 'watcher',
            script: 'scripts/watch-appmap.js',
            watch: false,
            autorestart: false,
            env: {
                NODE_ENV: 'production',
            },
        }
    ],
};
