import type {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '@kbn/core/server';

import type { HellotestPluginSetup, HellotestPluginStart } from './types';
import { defineRoutes } from './routes';

export class HellotestPlugin implements Plugin<HellotestPluginSetup, HellotestPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('hellotest: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('hellotest: Started');
    return {};
  }

  public stop() {}
}
