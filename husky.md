## Installation

```bash
$ npm install husky --save-dev
```

## Configuration

Inside of our package.json file, create a new property called husky with an empty object.

"husky": {},

Add another property called hooks that also specifies an empty object:

"husky": {
"hooks": {}
},

Create Hook

Pre-commit
npx husky add .husky/pre-commit "npm test"

Commit-msg
npx husky add .husky/commit-msg 'npx commitlint --edit $1'

Commit without conventional Commits
git commit -m "non-conventional commit message"

Commit with conventional commits
git commit -m "feat: add commitlint and husky"

## Instalation commitlint

//https://betterprogramming.pub/how-to-lint-commit-messages-with-husky-and-commitlint-b51d20a5e514

npm i -D @commitlint/{cli,config-conventional}

Create a .commitlintrc.json file in your app root, which will extend the config-conventional rules.

$ touch .commitlintrc.json

Then, we extend the config-conventional rules:

{
"extends": ["@commitlint/config-conventional"]
}

Finally, we need to add the commit-msg hook:

$ npx husky add .husky/commit-msg 'npx commitlint --edit $1'

## Instalation ESLint and Prettier

$ npm install --save-dev --save-exact prettier eslint-config-prettier

Create an ESLint config and check off whatever specifications you'd like for your project.

$ npm init @eslint/config

Be sure configuration:
{
"env": {
"browser": true,
"es2021": true
},
"extends": ["eslint:recommended", "plugin:react/recommended"],
"parserOptions": {
"ecmaFeatures": {
"jsx": true
},
"ecmaVersion": "latest",
"sourceType": "module"
},
"plugins": ["react"],
"rules": {
"indent": ["warn", "tab"],
"quotes": ["error", "single"],
"semi": ["error", "always"]
}
}

src/\*.test.js

touch .prettierrc.json //or create manually

.prettierrc.json
{
"tabWidth": 2,
"useTabs": true,
"printWidth": 80,
"semi": true,
"trailingComma": "es5",
"jsxSingleQuote": true,
"singleQuote": true
}

Then modify eslintrc.json to include the following as the final item in the "extends" configuration:

...,
"extends": [
...,
"prettier"
],
...,

npm i --save-dev lint-staged

Modify the pre-commit Git Hook in .husky. This will run lint-staged before a commit can be pushed to our codebase.

npx lint-staged

Add the lint-staged configuration to package.json so when certain files are staged for a commit, we run ESLint and Prettier.

package.json
...,
"lint-staged":{
"\*_/_.{js,jsx,ts,tsx}":[
"npx prettier --write",
"npx eslint --fix",
]
}
