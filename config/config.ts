import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: defaultSettings.title,
  proxy: proxy['dev'],
  locale: {
    default: 'zh-CN',
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  theme: { '@primary-color': defaultSettings.primaryColor },
  routes: routes,
  fastRefresh: {},
});
