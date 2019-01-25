---
layout: fluid/cli_docs_base
category: cli
id: cli-projects
page_name: Project Types
title: Project Types - Ionic CLI Documentation
hide_header_search: true
dark_header: true
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# Project Types


{% include fluid/toc.html %}

The Ionic CLI works with a variety of Ionic project types. The type of a project is stored in the project's `ionic.config.json` file as `type`. Here is a list of project type values:

* `ionic-angular`: [Ionic Angular](#ionic-angular)
* `ionic1`: [Ionic 1](#ionic-1)
* `custom`: The CLI will not invoke anything for build or serve. See [Hooks](/docs/cli/configuring.html#hooks) to use `ionic build` and `ionic serve` with your own build process.

## Ionic Angular

Ionic Angular ([`ionic-angular`](https://www.npmjs.com/package/ionic-angular)) uses [Angular 5](https://angular.io/) and [`@ionic/app-scripts`](https://github.com/ionic-team/ionic-app-scripts) for tooling.

You can start a new Ionic Angular app with the following command:

```bash
$ ionic start --type=ionic-angular
```

See [Starter Templates](/docs/cli/starters.html#ionic-angular) for a list of starters for Ionic Angular.

Ionic Angular apps are written in [TypeScript](https://www.typescriptlang.org/) and [Sass](http://sass-lang.com/) and are compiled and built with [`@ionic/app-scripts`](https://github.com/ionic-team/ionic-app-scripts), which is a configurable build system optimized for Ionic Angular.

`ionic build` and `ionic serve` use `@ionic/app-scripts` out of the box, so it doesn't need to be invoked directly. It also ships with good defaults, but can be configured in a variety of ways. See [`README.md`](https://github.com/ionic-team/ionic-app-scripts/blob/master/README.md) for configuration details.

### Project Structure

```
project/
├─ ionic.config.json # Ionic project config file
├─ package.json
├─ src/
│  ├─ app/
│  │  ├─ app.component.ts # root component for your app
│  │  ├─ app.html # app component template
│  │  ├─ app.module.ts # NgModule for app component
│  │  ├─ app.scss # global SCSS
│  │  └─ main.ts # bootstrap file
│  ├─ assets/ # put your images, etc. here
│  ├─ pages/ # contains the page components for your app
│  ├─ theme/
│  │  └─ variables.scss # see https://ionicframework.com/docs/theming
│  └─ index.html # main html file
└─ www/ # build output directory
```
## Ionic 1

Ionic 1 ([`ionic-v1`](https://github.com/ionic-team/ionic-v1/)) uses [AngularJS](https://angularjs.org/).

You can start a new Ionic 1 app with the following command:

```bash
$ ionic start --type=ionic1
```

See [Starter Templates](/docs/cli/starters.html#ionic-1) for a list of starters for Ionic 1.

Out of the box, Ionic 1 apps have no build process. `www/index.html` includes the `www/css/style.css` file and the three provided JS files withing `www/js/`.

### Project Structure

```
project/
├─ bower.json
├─ gulpfile.js
├─ ionic.config.json # Ionic project config file
├─ package.json
├─ scss/
│  └─ ionic.app.scss # enable sass to use
└─ www/
   ├─ css/
   │  └─ style.css # vanilla CSS source file
   ├─ js/
   │  ├─ app.js # bootstrap file, contains `.config()`
   │  ├─ controllers.js # https://docs.angularjs.org/guide/controller
   │  └─ services.js # https://docs.angularjs.org/guide/services
   ├─ templates/ # AngularJS templates
   └─ index.html # main html file
```

### Enabling Sass

You can use [Sass](http://sass-lang.com/) by changing which CSS file `www/index.html` uses (`css/style.css` is the default, `css/ionic.app.css` is generated and includes both Ionic styles and your app's styles).

The main Sass source file is located at `scss/ionic.app.scss`.

If your `gulpfile.js` contains the `sass` task, the CLI will run it automatically during the `ionic build` and `ionic serve` commands.

