<template>
  <div class="app" :class="{ dark: isDarkTheme, light: !isDarkTheme }">
    <div id="nav" class="filler">
      <div class="container">
        <router-link to="/" class="logo">fabler</router-link>
        <div class="spacer"></div>
        <router-link to="/add">Добавить</router-link>

        <IconPack
          class="btn"
          :icon="isDarkTheme ? 'sun' : 'moon'"
          @click="isDarkTheme = !isDarkTheme"
        />
        <IconPack class="btn" icon="account" />
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: () => ({
    isDarkTheme: false,
  }),
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
}

.dark {
  @import "./assets/scss/dark";
  @import "./assets/scss/common";
}

.light {
  @import "./assets/scss/light";
  @import "./assets/scss/common";
}
</style>
