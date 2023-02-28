import webpack from "webpack";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { paths } from "./config/webpack/path";
import { BuildEnv } from "./config/webpack/types/config.types";

export default (env: BuildEnv) => {
  const mode = env?.MODE || 'development';
  const PORT = env?.PORT || 3000;
  const apiUrl = env.API ? env.API : 'http://localhost:3001';

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
