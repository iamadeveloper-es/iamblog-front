<script setup lang="ts">
import AppPostCategories from '@/components/global/AppPostCategories.vue';
import { formatDateToMonthShortDayNumeric } from '@/utils/dates';
import { useRouter } from 'vue-router'

defineProps({
    posts: {
        type: Array,
        required: true
    }
});

const router = useRouter()

const goToPost = (postId: number) => {
  router.push({ name: 'POST', params: { id: postId } })
}

</script>

<template>
    <ul 
    class="post-list"
    v-if="posts && posts.length">
        <li 
        class="post-list__article"
        v-for="(post, index) in posts" 
        :key="index">
          <div class="post-list__top">
            <time :datetime="post.date">{{ formatDateToMonthShortDayNumeric(post.date) }}</time>
          </div>
          <h3 @click="goToPost(post.id)">{{ post.title }}</h3>
          <div class="post-list__bottom">
              <AppPostCategories :categories="post.categories"></AppPostCategories>
          </div>
        </li>
    </ul>
</template>
<style lang="scss">
.post-list{

  &__article{
    padding: 1em .6em;
    margin-top: .5em;
    background-color: var(--bg-header);
    border: 1px solid rgb(var(--grey-200));
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    h3{
      margin: 0.1em 0 0 0;
      font-size: 1.50em;
      cursor: pointer;
    }
  }

  &__top{
    time{
      color: rgb(var(--grey-500));
      font-size: .75em;
    }
  }

  .post-list__article:first-of-type{
    margin-top: 0;
  }
}
</style>