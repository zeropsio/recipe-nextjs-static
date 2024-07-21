import { Code } from "./Code";

const yamlcode = `project:
  name: recipe-nextjs
  tags:
    - zerops-recipe

services:
  - hostname: app
    type: nodejs@20
    buildFromGit: https://github.com/zeropsio/recipe-nextjs-nodejs
    enableSubdomainAccess: true`.trim();

export function Steps() {
  return (
    <div className="pt-40 space-y-12 max-w-3xl">
      <Code code={yamlcode} />
    </div>
  );
}
