import { addParameters, addDecorator } from '@storybook/vue';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
// you can import global styles resets or frameworks into the preview
import "../src/assets/global.css";

// doens't work, breaks loading
import withWrapper from "./wrapper";

addDecorator(withA11y)
addDecorator(withWrapper)

addParameters({
  notes: {
    // will make tabs
    intro: `
      #Default notes you should add notes here

      yes it support **markdown**  *tool*, and this could be an external file
    `,
    section: `
      another Section

      <Giphy query='cheese' />

    `
  },
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true, // Root folder in story name will become pretty
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    iframeHeight: "100px",
    inlineStories: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ]
})