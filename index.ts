import type { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';

const DEFAULT_CONFIG = {
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  endOfLine: 'lf',
  printWidth: 100,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
        useTabs: false,
        printWidth: 79,
      },
    },
    {
      files: ['Dockerfile', '*.dockerfile'],
      options: {
        spaceRedirects: false,
      },
    },
  ],
  importOrder: ['node:*', '<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '^@/tests/(.*)$', '', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'explicitResourceManagement'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
  ],
} satisfies PrettierConfig;

export default DEFAULT_CONFIG;
