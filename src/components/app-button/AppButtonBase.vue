<template>
  <component :is="tag" :class="classNames" v-bind="$attrs" v-on="$listeners">
    <!--
      @slot Menu Item footer
      @binding {object} textClassname icon of the menu item
      @binding {string} text text of the menu item
    -->
    <slot textClassname="c-button__text" iconClassname="c-button__icon" />
  </component>
</template>

<script>
/**
 * Generic base button that you can compose it exposes a slot
 * so you can decide how to place content, it doesn't enforce you to use an icon
 * Compose to get Your shortcuts
 */
export default {
  name: "AppButton",
  props: {
    /** Sometimes links have the appearnce of buttons and vice-versa
     * @values small | medium | large
     */
    tag: {
      type: String,
      default: "button"
    },
    /**
     * The size of the button
     * `small, normal, large`
     */
    theme: {
      type: String,
      default: "primary",
      validator: v =>
        ["", "primary", "secondary", "snow", "tertiary"].includes(v)
    },
    /**
     * The size of the button allows only some asdvalues
     * @values "naked", "empty"
     */
    layout: {
      type: String,
      default: "",
      validator: v => ["", "naked"].includes(v)
    },
    /**
     * Size desc
     * @property {string} content content of the first prop passed to the event
     */
    size: {
      type: String,
      default: "",
      validator: v => ["", "small"].includes(v)
    }
  },
  computed: {
    classNames() {
      return {
        "c-button": true,
        [`c-button--${this.theme}`]: this.theme !== "",
        [`c-button--${this.layout}`]: this.layout !== "",
        [`c-button--${this.size}`]: this.size !== ""
      };
    }
  },
  methods: {
    /**
     * Event for Alligator's example
     * @event gator - asdada0sdad
     * @type {Event}
     */
    handleClick(e) {
      this.$emit("gator", e);
    }
  }
};
</script>

<style lang="scss">
.c-button {
  position: relative;
  display: inline-block;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 30px;
  height: 43px;
  line-height: 43px;
  font-weight: 700;
  border-radius: 100px; // big enought for future buttons
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.11);
  transition: background-color 0.2s, opacity 0.2s, color 0.2s;
}

.c-button__icon {
  font-size: 1em;
  display: inline-flex;
  vertical-align: middle;
  margin-top: -2px; // optical align
  &:first-child {
    margin-right: 0.5em;
  }
  &:last-child {
    margin-left: 0.5em;
  }
}

//-/////////////////////////////////////////////////
// THEMES
//-/////////////////////////////////////////////////

.c-button--primary {
  background-color: lime;
  color: white;

  &:hover,
  &:focus {
    background-color: lawngreen;
  }

  &[disabled],
  &.is-disabled {
    opacity: 0.5;
  }
}
</style>
