<script setup lang="ts">

defineProps({
    modelValue: {
      type: String,
      default: '',
      required: true
  },
  placeholder: {
    type: String,
    default: 'Buscar...',
  }
});

const emit = defineEmits(['update:modelValue']);

const emitValue = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>
<template>
    <input 
    class="app-input"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emitValue">
</template>
<style lang="scss">
.app-input{
  width: 100%;
  padding: .75em .5em;
  border-radius: 3px;
  border: 1px solid rgb(var(--grey-500))
}
</style>