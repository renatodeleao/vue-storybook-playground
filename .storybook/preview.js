import { addParameters, addDecorator } from '@storybook/vue';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

addParameters({
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