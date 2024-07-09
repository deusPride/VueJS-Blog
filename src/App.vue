<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()
postStore.getPosts()
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/post-create" class="nav-link">New Post</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
<style lang="scss" scoped>
nav {
  padding: 1rem 2rem;
  background-color: #1e40af;
  overflow: hidden;
  font-weight: 700;
  .nav-link {
    color: #fff;
    padding: 85px 15px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    margin-right: 1rem;
    &:hover {
      background-color: #60a5fa;
    }
  }
}
</style>
