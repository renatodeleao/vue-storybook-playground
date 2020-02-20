<template>
  <div class="pad">
    <div class="pad-inner">
      <story />
    </div>
  </div>
</template>

<script>
const StorybookWrapper = {
  name: "StorybookWrapper"
}

export default StorybookWrapper;
export const withWrapper = () => (StorybookWrapper)
</script>

<style>

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
}
.pad {
  display: flex;
  flex-direction: column
}
.pad-inner {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>