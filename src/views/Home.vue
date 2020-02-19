<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    <AppButtonBase>Button</AppButtonBase>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AppButtonBase from "@/components/app-button/AppButtonBase.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AppButtonBase
  }
};
</script>
