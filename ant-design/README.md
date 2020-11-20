# Create React App Advanced

- [Create React App Advanced](#create-react-app-advanced)
  - [Getting start](#getting-start)
    - [Create React App with TypeScript](#create-react-app-with-typescript)
    - [NPM Packages](#npm-packages)
      - [ESLint & Prettier Config](#eslint--prettier-config)
    - [Scripts](#scripts)
    - [GitHub Actions](#github-actions)
  - [Reference](#reference)
  
## Getting start
### Create React App with TypeScript
Start a new project with create-react-app and the typescript flag.
```bash
$ npx create-react-app my-app --template typescript
```

### NPM Packages
We’ll be adding the following packages:

```bash
$ yarn add --save redux react-redux redux-thunk react-router-dom
$ yarn add -D @types/react-redux @types/react-router-dom @types/redux @types/redux-thunk
$ yarn add -D yarn add -D eslint-config-prettier eslint-plugin-prettier prettier
```
#### ESLint & Prettier Config
- `.eslintrc`: 
  ```js
  {
    "extends": ["react-app", "prettier"],
    "plugins": ["react", "prettier"],
    "rules": {
      "prettier/prettier": [
        "warn",
        {
          "arrowParens": "avoid",
          "trailingComma": "all",
          "endOfLine": "lf",
          "tabWidth": 2,
          "printWidth": 80,
          "useTabs": false
        }
      ],
      "no-console": "warn"
    }
  }
  ```
- `.eslintignore`
  ```
  src/serviceWorker.ts
  src/setupTests.ts
  react-app-env.d.ts
  ```
- `.prettierrc`
  ```js
  {
    "arrowParens": "avoid",
    "semi": true,
    "trailingComma": "all",
    "endOfLine": "lf",
    "tabWidth": 2,
    "printWidth": 80,
    "useTabs": false,
    "singleQuote": true
  }
  ```
- `.prettierignore`
  ```
  .cache
  package-lock.json
  src/serviceWorker.ts
  src/setupTests.ts
  ```
### Scripts

- Lint and format with these scripts:
  ```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --ext js,jsx,ts,tsx src/",
    "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src/",
    "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)\"",
    "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.jsx|*.js|*.scss|*.css)\""
  }
  ```
### GitHub Actions

As a bonus, add a Github Action to run your lint, test, and build scripts:

```yml
name: CI

on: [push]

jobs:
  build:
    name: Build
    runs-on: ubuntu-18.04
    strategy:
      matrix:
        node_version: [14]

    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          node_version: ${{ matrix.node_version }}

      - name: run CI
        run: |
          npm install # or yarn install
          npm run lint # or yarn lint
          npm run test # or yarn test
          npm run build # or yarn build
```

## Reference

[Ref](https://blog.adev42.com/config-esling-prettier-react-app)