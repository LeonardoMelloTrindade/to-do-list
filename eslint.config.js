import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'default-case': 'error'
    }
  },
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
];
