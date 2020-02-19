//
// https://storybook.js.org/docs/basics/writing-stories/#run-multiple-storybooks
import { action } from "@storybook/addon-actions";
import AppButtonBase from "./AppButtonBase.vue";
import AppButtonWithIcon from "./AppButtonWithIcon.vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

// Story configuration
export default {
  // https://storybook.js.org/docs/basics/writing-stories/#story-hierarchy
  title: "UI/Components/Button/ With Icon", // using slashes creates the folder structure
  component: AppButtonWithIcon,
  subcomponents: { AppButtonBase },
  decorators: [
    // () => ({
    //   template: `<div :style="{ background: 'red' }"><story/></div>` // wrap all stories of this component into this markup
    // }),
    withKnobs
  ],
  parameters: {
    componentSubtitle: "Your button for all your needs",
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
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const actionsData = {
  onButtonClick: action("onClick")
};

export const WithIcon = () => ({
  components: { AppButtonWithIcon },
  methods: actionsData,
  template: `
    <AppButtonWithIcon icon="merda" text="coco" @click="onButtonClick">withIcon</AppButtonWithIcon>
  `
});
