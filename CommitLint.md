## Instalation

npm i -D @commitlint/{cli,config-conventional}

Create a .commitlintrc.json file in your app root, which will extend the config-conventional rules.

touch .commitlintrc.json

Then, we extend the config-conventional rules:

{
"extends": ["@commitlint/config-conventional"]
}

Finally, we need to add the commit-msg hook:

npx husky add .husky/commit-msg 'npx commitlint --edit $1'
