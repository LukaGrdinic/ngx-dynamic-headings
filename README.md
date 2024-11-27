# NgxDynamicHeadings

> **⚠️ This repository hosts the version 2 of the library!**
>
> This version of the library works with Angular 18 and higher.
> 
> The old version - version 1 of the library, that works with Angular 16, is now deprecated and will no longer receive updates or bug fixes.  
> 
> If you're looking for the old repository, you can find it here: [Old Repository](https://github.com/LukaGrdinic/ngx-dynamic-headings-nx).  
>
> Please consider migrating to the new version to take advantage of the latest features and improvements.

## About this library

ngx-dynamic-headings is a library to help you generate heading levels in your Angular app dynamically, at run-time. 

This open-source project welcomes contributions from the community to improve and enhance its functionality.

This repo contains the library source code as well as a playground web app to test the lib behaviour.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Requesting Features](#requesting-features)
  - [Code Contributions](#code-contributions)
  - [Documentation](#documentation)
  - [Testing](#testing)
  - [Pull Requests](#pull-requests)
- [Code Guidelines](#code-guidelines)
  - [Library Code](#library-code)
  - [Style](#style)
    - [Git commit messages](#git-commit-messages)
  - [Naming Conventions](#naming-conventions)
  - [Testing Guidelines](#testing-guidelines)
- [Community](#community)
  - [Code of Conduct](#code-of-conduct)
  - [Communication Channels](#communication-channels)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have following software installed:

- Node.js v20+
- Angular CLI v18+ (optional)

### Installation

1. Install project dependencies: `npm install ngx-dynamic-headings --save`

### Usage

Import the directive in your standalone component:

```
import { Component } from '@angular/core';
import { NgxDynamicHeadingDirective } from 'ngx-dynamic-headings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgxDynamicHeadingDirective ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

```

Then use the \<h\> tags wherever you want dynamic headings to be generated

```
<h1>This is the h1 heading</h1>

<div>
  <h>This will generate an h2 heading at runtime</h>
  <h>This will generate an h2 heading at runtime</h>
  <div>
    <h>This will generate h3 heading at runtime</h>
    <h>This will generate h3 heading at runtime</h>
  </div>
</div>
```

## How to Contribute

We welcome contributions from the community. There are several ways you can contribute to ngx-dynamic-headings:

### Reporting Bugs

If you encounter any bugs or issues, please search the [GitHub Issues](https://github.com/LukaGrdinic/ngx-dynamic-headings/issues) to check if it has already been reported. If not, open a new issue, describing the problem and steps to reproduce it.

### Requesting Features

If you have an idea for a new feature or improvement, please check the existing issues to see if it has been suggested before. If not, feel free to open a new feature request issue, explaining the proposed feature and its benefits.

### Documentation

Improving documentation is valuable for the project. If you find any inaccuracies or have suggestions for improvements, please submit a pull request with your proposed changes.

#### Library docs

Go to [ngx-dynamic-heading docs](/projects/ngx-dynamic-headings/README.md)

### Testing

We encourage contributors to write tests for new features and bug fixes. Make sure all tests pass before submitting your contribution.
To run tests, run the command `npm run test`

### Pull Requests

All contributions are reviewed by the maintainers before merging. Be patient during the review process and be prepared to address any feedback or suggestions. Once your pull request is approved, it will be merged into the `main` branch.

## Code Guidelines

### Code Contributions

If you want to contribute code, follow these steps:
1. Fork the repository.
2. Create a new branch from the `main` branch.
3. Make your changes and commit them with descriptive commit messages - please note that this project uses conventional commits in order to keep consistent commit message style as well as a CI pipeline which works by analyzing commit messages. Read more about [commit messages style](#git-commit-messages).
4. Test your changes thoroughly.
5. Push your branch to your forked repository.
6. Open a pull request, describing the changes and linking any related issues.

### Library Code

To test the lib code in the dev environment, build the library with

`npm run build ngx-dynamic-headings`

Then in package.json change ngx-dynamic-headings dependency to point to locally built lib files:

`"ngx-dynamic-headings": "file:./dist/ngx-dynamic-headings",`

And run `npm install`

After that, simply include the directive in your app project and follow the usage [usage instructions](#usage).

### Development server

Run `npm run start` to run a development server. This app is used as a playground to experiment with the **ngx-dynamic-headings** library

### Git commit messages

This project uses conventional commits, so make sure all commits adhere to conventional rules. Learn more at https://www.conventionalcommits.org/en/v1.0.0/

Setup appropriate git hooks with husky by running:

`npx husky init`

Then change the commit-msg content in /.husky/_/commit-msg to be:

> #!/usr/bin/env sh
>
> npx --no-install commitlint --edit "$1"

This will prevent you from writing any commit message format.

You can use commitizen to help you write appropriate commit message format of conventional commits.

Try it by typing

`npm run commit`

and answer the prompts to create your commit message 

#### VSC users

You can, instead of commitizen use **conventional-commits** VSC extension

Make sure extension **conventional-commits** is installed.

Type <kbd>Ctrl</kbd> + <kbd>Shift</kbd> +<kbd>P</kbd> 

Then enter **conventional-commits** and then just answer the questions regarding your commit

### Testing Guidelines

To run unit tests run `npm run test` or `npm run test:dev` to run it in watch mode.

## Community

### Code of Conduct

We follow a [Code of Conduct](/CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive environment for all contributors. Please review and abide by it when participating in the project.

<!--

### Communication Channels

[List any communication channels, such as Slack, Discord, or mailing lists, where contributors can interact and seek support.] 

-->

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE.md) file for details.

---

Thank you for taking an interest in ngx-dynamic-headings ! Your contributions will be invaluable in making the project better. Happy coding!
