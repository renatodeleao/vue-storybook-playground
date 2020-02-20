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
    withKnobs
  ],
  parameters: {
    componentSubtitle: "Your button for all your needs",

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
