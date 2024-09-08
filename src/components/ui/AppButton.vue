<script setup lang="ts">
defineProps({
    btnType: {
        type: String,
        default: 'button',
    },
    text: {
        type: String,
        default: 'Action'
    }
});

const emit = defineEmits(['clicked']);

const emitValue = (ev: Event) => {
    emit('clicked', ev)
};
</script>
<template>
    <button
    class="app-button"
    :type="btnType"
    @click="emitValue"
    >{{ text }}</button>
</template>

<style lang="scss">
.app-button{
    border: none;
    padding: .8em 1em;
    border-radius: 5px;
    cursor: pointer;

    &--primary{
        background-color: rgb(var(--primary));
        color: var(--white);
    }
}
</style>