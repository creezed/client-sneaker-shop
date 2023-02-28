import path from 'path';
import { BuildPaths } from './types/config.types';

export const paths: BuildPaths = {
  entry: path.resolve(__dirname, '../..', 'src'),
  build: path.resolve(__dirname, '../..', 'build'),
  html: path.resolve(__dirname, '../..', 'public', 'index.html'),
  src: path.resolve(__dirname, '../..', 'src'),
  locales: path.resolve(__dirname, '../..', 'public', 'locales'),
  buildLocales: path.resolve(__dirname, '../..', 'build', 'locales'),
};
