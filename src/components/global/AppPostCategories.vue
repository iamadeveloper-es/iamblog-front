<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppTag from '../ui/AppTag.vue';

defineProps({
    categories: {
        type: Object,
        required: true
    }
})

const router = useRouter()

const goToCategories = (cat: {}) => {
  router.push({ name: 'CATEGORIES', params: { name: cat.name, id: cat.id } })
}

</script>
<template>
    <ul class="categories">
        <li 
        v-for="(cat, index) in categories"
        :key="index">
            <AppTag :tag="cat" @clicked="goToCategories(cat)"></AppTag>
        </li>
    </ul>
</template>

<style lang="scss">
.categories{
  display: flex;
  flex-wrap: wrap;
  gap: .5em;
  margin-top: .75em;
}
</style>