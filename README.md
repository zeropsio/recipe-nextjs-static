# Zerops x Next.js - Static

Next.js is a React Framework for fast, dynamic full-stack web apps with both server-side rendering and static site generation. <a href="https://zerops.io/" target="_blank">Zerops</a> makes deploying and running Next.js apps, both server side rendered and static, a breeze.

This recipe showcases the Static version, see [zeropsio/recipe-nextjs-nodejs](https://github.com/zeropsio/recipe-nextjs-nodejs) for the Node.js SSR version.

![nextjs](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-nextjs.svg)

<br/>

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-nextjs-static/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/nextjs-static)

<br/>

## Recipe features
- A **Next.js 14 SSG** version with App Router running on a load balanced **Zerops Static** service.

<br/>

## Production vs. development
This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resiliace, start with at least two containers (add `minContainers: 2` in recipe YAML in the `app` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

<br/>

## Changes made over the default installation
If you want to modify your existing Next.js app to efficiently run on Zerops, Follow this step:

1. Go to [`next.config.mjs`](https://github.com/zeropsio/recipe-nextjs-static/blob/main/next.config.mjs) and add `output: 'export'` to nextConfig.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

export default nextConfig;
```

Now, there are no changes needed in the codebase on top of the standard installation, just add [zerops.yml](https://github.com/zeropsio/recipe-nextjs-static/blob/main/zerops.yml) to your repository.

<br/>
<br/>

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
