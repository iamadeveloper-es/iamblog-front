import type { Post } from '@/modules/posts/domain/Post';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostsStore = defineStore('posts-store', () => {
  const posts = ref();

  function savePosts (payload: Post[]){
    posts.value = payload;
  }

  return{
    posts,
    savePosts
  };
});
