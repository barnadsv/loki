const storybook = require('@storybook/svelte');
const { createStorybookConfigurator } = require('@loki/browser');

module.exports = createStorybookConfigurator(storybook);
