<script setup lang="ts">
import { formatDateToMonthShortDayNumeric } from '@/utils/dates';
import MarkdownContent from '../ui/MarkdownContent.vue'
import AppPostCategories from '@/components/global/AppPostCategories.vue';
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <article class="post" v-if="Object.keys(post).length">
        <header>
            <div class="post-list__top">
                <time :datetime="post.date">Publicado el {{ formatDateToMonthShortDayNumeric(post.date) }}</time>
            </div>
            <h1>{{ post.title }}</h1>
            <AppPostCategories :categories="post.categories"></AppPostCategories>
        </header>
        <MarkdownContent :content="post.content"></MarkdownContent>
    </article>
</template>
<style lang="scss">
.post{

    header time{
        display: block;
        margin-top: 2em;
        color: rgb(var(--grey-500));
        font-size: .75em;
    }

    header h1{
        font-size: 2.5em;
        margin: .3em 0 .70em 0;
    }
}
</style>