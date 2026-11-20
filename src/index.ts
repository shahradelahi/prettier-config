import type { Config } from 'prettier';
import * as SortImportPlugin from '@trivago/prettier-plugin-sort-imports';
import * as PackageJsonPlugin from 'prettier-plugin-packagejson';
import * as ShellPlugin from 'prettier-plugin-sh';

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
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [SortImportPlugin, PackageJsonPlugin, ShellPlugin],
} satisfies Config;

export default DEFAULT_CONFIG;
