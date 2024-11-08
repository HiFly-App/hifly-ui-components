import type {StorybookConfig} from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
  ],
  staticDirs: ['../src/assets'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async config => {
    // Remove existing file-loader or url-loader rule for SVG
    config.module?.rules?.forEach(rule => {
      if (rule && typeof rule === 'object' && 'test' in rule && rule.test && rule.test.toString().includes('svg')) {
        rule.exclude = /\.svg$/;
      }
    });

    // Add @svgr/webpack loader for SVG filesxw
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Alias for react-native to react-native-web
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native': 'react-native-web',
      // '@hooks': path.resolve(__dirname, '../src/hooks'),
    };

    return config;
  },
};

export default config;
