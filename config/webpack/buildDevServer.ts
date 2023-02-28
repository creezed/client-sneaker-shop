import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types/config.types';

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
