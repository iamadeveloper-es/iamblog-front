<script setup lang="ts">
import { onMounted } from 'vue';
import AppFooter from './components/global/AppFooter.vue';
import AppHeader from './components/global/AppHeader.vue';
import { setColorScheme } from './utils/aplicationUtils';

const configApp = () => {

  const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 
    'dark' : 
    'light';

  setColorScheme(theme);
}

onMounted(() => {
  configApp()
})

</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <RouterView/>
  </main>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
// @import "./assets/scss/main.scss";
</style>
