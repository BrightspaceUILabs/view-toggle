# d2l-labs-view-toggle

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/view-toggle.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/view-toggle)

> Note: this is a ["labs" component](https://daylight.d2l.dev/developing/getting-started/component-tiers/). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://daylight.d2l.dev/developing/creating-component/before-building/#working-with-design)
> - [ ] [Architectural sign-off](https://daylight.d2l.dev/developing/creating-component/before-building/#web-component-architecture)
> - [x] [Continuous integration](https://daylight.d2l.dev/developing/testing/tools/#continuous-integration)
> - [x] [Cross-browser testing](https://daylight.d2l.dev/developing/testing/cross-browser/)
> - [ ] [Unit tests](https://daylight.d2l.dev/developing/testing/tools/) (if applicable)
> - [ ] [Accessibility tests](https://daylight.d2l.dev/developing/testing/accessibility/)
> - [ ] [Visual diff tests](https://daylight.d2l.dev/developing/testing/visual-difference/)
> - [ ] Localization with Serge (if applicable)
> - [ ] Demo page
> - [ ] README documentation

A Lit element component for toggling between views.

## Installation

To install from NPM:

```shell
npm install @brightspace-ui-labs/view-toggle
```

## Usage

```html
<script type="module">
    import '@brightspace-ui-labs/view-toggle/view-toggle.js';
</script>
<d2l-view-toggle
        toggleOptions='[{"text":"Bananas","val":"overall"},{"text":"Minions","val":"minios"},{"text":"Pyjamas","val":"subject"}]'
        text="Toggle: "
></d2l-view-toggle>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

### Linting

```shell
# eslint and lit-analyzer
npm run lint

# eslint only
npm run lint:eslint
```

### Testing

```shell
# lint & run headless unit tests
npm test

# unit tests only
npm run test:headless

# debug or run a subset of local unit tests
npm run test:headless:watch
```

### Running the demos

To start a [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) that hosts the demo page and tests:

```shell
npm start
```

### Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.
