const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const appMapPath = path.join(process.cwd(), 'apps/admin/app-map.json');

console.log('👀 Watching app-map.json for changes...');

fs.watchFile(appMapPath, { interval: 1000 }, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        console.log('🔁 app-map.json changed. Restarting proxy-server...');
        exec('pm2 restart proxy-server', (err, stdout, stderr) => {
            if (err) {
                console.error('❌ Failed to restart proxy-server:', err);
                return;
            }
            console.log('✅ proxy-server restarted.');
        });

        // Restart tất cả các app trong appMap (bỏ điều kiện route !== '/')
        const appMap = JSON.parse(fs.readFileSync(appMapPath, 'utf-8'));

        appMap.forEach(app => {
            console.log(`🔁 Restarting sub app: ${app.name}`);
            exec(`pm2 restart ${app.name}`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`❌ Failed to restart ${app.name}:`, err);
                } else {
                    console.log(`✅ ${app.name} restarted.`);
                }
            });
        });
    }
});
