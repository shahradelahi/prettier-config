# @shahrad/prettier-config

My personal [Prettier](https://prettier.io/) config.

## Install

```bash
pnpm i -D @shahrad/prettier-config
```

## Usage

###### `package.json`

```json
{
  "prettier": "@shahrad/prettier-config"
}
```

###### `.prettierrc`

```prettier
"@shahrad/prettier-config"
```

###### `prettier.config.mjs`

```javascript
import DEFAULT_CONFIG from '@shahrad/prettier-config';

/** @type {import('prettier').Config} */
const config = Object.assign(DEFAULT_CONFIG, {
  trailingComma: 'none',
});

export default config;
```

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi)
