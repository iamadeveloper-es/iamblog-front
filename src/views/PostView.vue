<script setup lang="ts">
import {PostAdapter} from '../modules/posts/aplication/PostAdapter'
import {PostService} from '../modules/posts/infraestructure/Post.service'
import PostArticle from '@/components/global/PostArticle.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const postRepository = new PostAdapter()
const postService = new PostService(postRepository)

const route = useRoute()
const post = ref()

const getCover = computed(() => {
  return import.meta.env.VITE_BASE_URL + post.value.cover?.data?.attributes.url
})

const getPost = async (id: string) => {
    post.value = await postService.getPost(id)
}

const configView = () => {
    const id = route.params.id
    getPost(id)
}

onMounted(() => {
    configView()
})
</script>

<template>
  <section class="section post" id="post" v-if="post && Object.keys(post).length">
    <div class="container-fluid" v-if="post.cover.data">
      <div class="row">
        <div class="col-12 p-0">
          <div class="post__cover">
            <img :src="getCover" :alt="post.cover?.data?.attributes?.alternativeText || post.title">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
            <PostArticle :post="post"></PostArticle>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.post{

  &__cover{
    max-height: 400px;
    overflow: hidden;
    display: flex;

    img{
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
