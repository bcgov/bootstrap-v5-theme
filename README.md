
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# 🚀 Government of British Columbia Bootstrap v5 Theme

[Demonstrations of the theme](https://anjanak13.github.io/bootstrap-theme/dist/index.html)

A Bootstrap version 5.3 BC Government look-and-feel featuring:

- The [BC Sans](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/bc-sans) typeface
- Compatibility with pure Bootstrap markup

The project is a successor to the previous
[Gov-4.0-Bootstrap-theme](https://github.com/bcgov/bootstrap-theme)
[Gov-2.0-Bootstrap-Skeleton](https://github.com/bcgov/Gov-2.0-Bootstrap-Skeleton)
and [mygovbc-bootstrap-theme](https://github.com/bcgov/mygovbc-bootstrap-theme).
We combined the best of all projects and leverage the latest
[Bootstrap](http://getbootstrap.com/) version.

## Usage

- ### Direct Integration with Minified Files

    You can directly use the minified CSS and JS files in your project. The minified CSS file to link can be found via this [path](dist/css/bootstrap-theme.min.css):

    `dist/css/bootstrap-theme.min.css`

    To ensure dropdowns, tooltips, and popovers function properly, you can import the minified JS file into your project. which can be found via this [path](dist/js/bootstrap-theme.min.js):

    `dist/js/bootstrap-theme.min.js`

    These files can be added to your project's `<head>` section:

    ```html
    <head>
    ...
        <script defer="defer" src="js/bootstrap-theme.min.js"></script>
        <link href="css/bootstrap-theme.min.css" rel="stylesheet">
    </head>
    ```

- ### SCSS To Modify Variables/Themes

    This section describes how to change the theme or remove unneeded CSS

    - #### Tool Setup

        You'll need the following tools installed on your device:
        
        * [NodeJS 20 LTS+](https://nodejs.org/en/) with NPM 10+ to build

    - #### First Install

        After your tools are in place, you should install some packages. In the working directory:

        ```bash
        git clone https://github.com/anjanak13/bootstrap-theme.git
        cd bootstrap-theme
        npm install
        ```

    - #### Building Dist

        To build the styles, JavaScript and other assets, use:

        ```bash
        npm run build
        ```    

        Or for continuous building and real-time updates as you make changes:

        ```bash
        npm start
        ```        

- ### Migration Guide From Version 4 to 5

    The [CHANGELOG](CHANGELOG.md) outlines the majority of classes and changes needed for migration, allowing you to easily refer to and perform search and replace where necessary.

    If you need to add or modify utilities, you can consult the official [bootstrap migration guide](https://getbootstrap.com/docs/5.3/migration/) for a comprehensive list of changes.

## Extending the Theme

Refer to the [official Bootstrap documentation](https://getbootstrap.com/docs/5.3/extend/approach/) to learn about extending or enhancing this theme. 

Tooling and build follow the same steps as [SCSS To Modify Variables/Themes section](#scss-to-modify-variablesthemes)

# NPM Package

https://www.npmjs.com/package/@bcgov/bootstrap-v5-theme


## NPM Package Maintenance

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

    - Run the following command in your termnial
    
```bash
npm publish --access=public
```

If you are publishing to a namespace, you will have to ensure that `--acess=public` is included in your run command as packages for an org are private by default


Note: You can test your changes locally by changing the name in the package.json to `@<your-namespace>/bootstrap-v5-theme` and publishing there. Once you are satisfied, you can republish to the @bcgov org.
    

## Updating the Theme

If Bootstrap has a minor update and you wish to update the minified CSS and JS files, do the following:
1. Run `npm run build` in order to build the needed assests.
2. Mark a new release on GitHub 
3. Publish the updated dist folder to NPM JS Registry as a new NPM package version
