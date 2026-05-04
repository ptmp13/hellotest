import type { NavigationPublicPluginStart } from '@kbn/navigation-plugin/public';

export interface HellotestPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HellotestPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
