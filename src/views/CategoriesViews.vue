<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {PostAdapter} from '../modules/posts/aplication/PostAdapter'
import {PostService} from '../modules/posts/infraestructure/Post.service'
import AppPosts from '@/components/global/AppPosts.vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const postRepository = new PostAdapter()
const postService = new PostService(postRepository)

const posts = ref()
const category = ref()

const setCategory = () => {
  category.value = {
    id: route.params.id,
    name: route.params.name
  }
}

const getPosts = async () => {
  const response = await postService.getPosts()
  posts.value = response.filter(post => post.categories.some(cat => cat.id == category.value.id))
}

const configView = async () => {
  setCategory()
  await getPosts()
  
}

onMounted(() => {
  configView()
})
</script>

<template>
    <section class="section posts" id="posts">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="section__title">Resultados para categoría <span>{{ category?.name }}</span></h1>
          </div>
          <div class="col-12">
            <AppPosts :posts="posts"></AppPosts>
          </div>
        </div>
      </div>
    </section>
</template>