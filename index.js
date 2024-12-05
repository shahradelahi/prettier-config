/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
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
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '^@/tests/(.*)$', '', '^[./]'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
  ],
};

export default DEFAULT_CONFIG;
