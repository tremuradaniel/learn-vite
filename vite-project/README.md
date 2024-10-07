`npm create vite@latest`
`npm install`
`npm run dev`

`npm run build`


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# typescript-plugin-css-modules

This plugin provides type information to IDEs and any other tools that work with TypeScript language service plugins.

![alt text](/documentation/auxiliary/typescript-plugin-css-modules.png)

In order for this to work, needs the TS version selected to be the one of the workspace.

![alt text](/documentation/auxiliary/typescript-plugin-css-modules2.png)

# Building for production

`npm run build`

`npm run preview` - runs a preview using files in dist (no hot autoloading)

Separate vendor libraries in their own JS bundle.

main in dist contains application code an the entire react library
![alt text](/documentation/auxiliary/build-for-production.png)

In order to avoid building all the libraries each time we only make a change to our code, we can use Vite to separate our code build from the vendors' build.

This can be done using `manualChunks` with the separation result:

![alt text](/documentation/auxiliary/build-for-production2.png)

Making now changes in our code will lead to a different hash when building again, while the vendor hash remains the same.

![alt text](/documentation/auxiliary/build-for-production3.png)