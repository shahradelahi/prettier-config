import ImportOrderParserPlugin from '@trivago/prettier-plugin-sort-imports';
import PackageJsonPlugin from 'prettier-plugin-packagejson';
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
  importOrder: [
    'node:*',
    '<THIRD_PARTY_MODULES>',
    '<SEPARATOR>',
    '^@/(.*)$',
    '^@/tests/(.*)$',
    '<SEPARATOR>',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'explicitResourceManagement'],
  importOrderSeparation: true,
  plugins: [ImportOrderParserPlugin, PackageJsonPlugin, ShellPlugin],
};

export default DEFAULT_CONFIG;
