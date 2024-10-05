import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useAppStore = defineStore('app-store', () => {
  const appData = reactive({
    theme: ''
  });

  function updateAppProperty(property, value){
    appData[property] = value
  }

  return{
    appData,
    updateAppProperty
  };
});
