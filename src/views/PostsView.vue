<script setup lang="ts">
import {ref, onMounted, watch} from 'vue'
import {PostAdapter} from '../modules/posts/aplication/PostAdapter'
import {PostService} from '../modules/posts/infraestructure/Post.service'
import { usePostsStore } from '@/stores/postsStore';
import AppPosts from '@/components/global/AppPosts.vue';
import { useRoute } from 'vue-router';


const { posts: storedPosts, savePosts } = usePostsStore();
const postRepository = new PostAdapter()
const postService = new PostService(postRepository)
const route = useRoute()
const posts = ref()

watch(route, () => filteredPosts());

const getPosts = async () => {
  if(storedPosts && storedPosts.length){
    posts.value = storedPosts
  }
  else{

    const response = await postService.getPosts()
    savePosts(response)
    posts.value = response
  }
}

const filteredPosts = async () => {
  try {
    const search = route.query?.search
    const response = await postService.fetchPostsByCatOrTitle(search)
    posts.value = response
  } catch (error) {
    console.log(error)
  }
}

const configView = async () => {
  if(route.query?.search && route.query?.search.length){
    await filteredPosts()
  }
  else{
    await getPosts()
  }
  
  
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
          <h1 class="section__title" v-if="!route.query.search">Posts</h1>
          <h1 class="section__title" v-else>Resultados encontrados para <span>{{ route.query.search }}</span></h1>
        </div>
        <div class="col-12">
          <AppPosts :posts="posts"></AppPosts>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">

</style>