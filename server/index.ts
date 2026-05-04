import type { PluginInitializerContext } from '@kbn/core/server';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export async function plugin(initializerContext: PluginInitializerContext) {
  const { HellotestPlugin } = await import('./plugin');
  return new HellotestPlugin(initializerContext);
}

export type { HellotestPluginSetup, HellotestPluginStart } from './types';
