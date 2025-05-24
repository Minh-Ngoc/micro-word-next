import { getAppConfig } from '../../lib/config';
import ConfigApp from '../components/config-app';

export default function Admin() {
  const currentConfig = getAppConfig();

  return (
    <ConfigApp currentConfig={currentConfig} />
  );
}