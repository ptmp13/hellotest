import { HellotestPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new HellotestPlugin();
}
export type { HellotestPluginSetup, HellotestPluginStart } from './types';
