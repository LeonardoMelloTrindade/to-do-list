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
      'default-case': 'error',
      'no-var': 'error',
      'no-console': 'error',
      'eqeqeq': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'space-infix-ops': 'error',
      'vue/multi-word-component-names': 'off',
    },
  },
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
];
