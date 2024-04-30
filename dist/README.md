[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# 🚀 Government of British Columbia Bootstrap v5 npm Package

This package contains assets such as images, fonts as well as minified CSS and JS files to incorporate into your own project. 

## Package Maintenance 
If you would like to update the project and would like to push your changes to the npm registry, the following will be useful.
To push to the npm registry, you must ensure that the version number has been updated to reflect any of the changes that you’ve made. Upon following semantic versioning, and updating the version number in `package.json`  you can then publish the package in your own namespace.

1. Ensure you are logged into your npm account. To log in via the terminal, run the following:

```bash
npm login
```

- upon successful completion you will see the following: 

```bash
Logged in on https://registry.npmjs.org/.
```

2. Now you can publish your package

    - To do so, change the name in the package.json to `@<your-namespace>/bootstrap-v5-theme`
    - Run the following command in your termnial
    
```bash
npm publish --access=public
```

If you are publishing to a namespace, you will have to ensure that `--acess=public` is included in your run command as packages for an org are private by default


## Use of the Package

### Direct Usage

- To refer to the assets directly within your project, you can link them to your project as such:

    - CSS: `node_modules/@<your-namespace>/bootstrap-v5-theme/css/bootstrap-theme.min.css`
    - JS: `node_modules/@<your-namespace>/bootstrap-v5-theme/css/bootstrap-theme.min.js`
    
### Usage by importing assets

- To import the assets and use them in your project, you can import them through your index.js through

```bash
const bootstrapTheme = require('@<your-namespace>bootstrap-v5-theme');`
```