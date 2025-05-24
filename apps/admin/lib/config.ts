import fs from 'fs';
import path from 'path';

const configPath = path.join(process.cwd(), 'app-map.json');

export function getAppConfig() {
  const raw = fs.readFileSync(configPath, 'utf-8');
  return JSON.parse(raw);
}

export function saveAppConfig(data: any) {
  fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
}
