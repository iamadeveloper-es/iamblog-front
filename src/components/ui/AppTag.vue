<script setup lang="ts">
import type { PropType } from 'vue';

interface Tag{
    name: string
};

defineProps({
    tag: {
        type: Object as PropType<Tag>,
        required: true
    }
});

const emit = defineEmits(['clicked']);

const emitEvent = (ev: Event) => {
    emit('clicked', ev)
};

</script>
<template>
    <span class="app-tag" @click="emitEvent">{{ tag.name }}</span>
</template>
<style lang="scss">
.app-tag{
  padding: .5em;
  font-size: .85em;
  background-color: rgba(var(--green-500), .1);
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &::before{
    content: '#';
    margin-right: .25em;
    color: rgba(var(--green-500), .8);
  }

  &:hover{
    background-color: rgba(var(--green-500), .15);
  }

}
</style>