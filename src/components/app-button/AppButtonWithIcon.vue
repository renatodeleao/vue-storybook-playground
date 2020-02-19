<template>
  <AppButtonBase
    v-slot="{ textClassname, iconClassname }"
    v-bind="$props"
    v-on="$listeners"
  >
    <span :class="textClassname" :icon="icon" />
    <span :class="iconClassname" v-html="text" />
  </AppButtonBase>
</template>

<script>
import AppButtonBase from "./AppButtonBase";

/**
 * Composes AppButtonBase into a primary style
 */
export default {
  components: {
    AppButtonBase
  },
  props: {
    /** Icon, can be anyone form the  list see list.js
     * @values small | medium | large
     */
    icon: {
      type: String,
      required: true
    },
    /** Text, can be html mates
     * @values small | medium | large
     */
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
