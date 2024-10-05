<script setup lang="ts">
import { onMounted } from 'vue';
import AppFooter from './components/global/AppFooter.vue';
import AppHeader from './components/global/AppHeader.vue';
import { savedColorScheme, setColorScheme } from './utils/aplicationUtils';
import { useAppStore } from '@/stores/appStore';

const { appData, updateAppProperty } = useAppStore();

const configApp = () => {

  const appTheme = savedColorScheme();

  updateAppProperty('theme', appTheme)

  setColorScheme(appTheme);
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
