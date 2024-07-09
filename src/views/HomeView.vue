<script setup>
import { ref } from 'vue'
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()
const postFilter = ref('All')

const setPostFilter = () => (postFilter.value = postFilter.value === 'All' ? 'Saved' : 'All')

postStore.getPosts()
</script>

<template>
  <div class="container">
    <div class="header">
      <div>
        <h2>{{ postFilter }} posts</h2>
        <span v-show="postStore.loading" class="material-icons">cached</span>
      </div>
      <button @click="setPostFilter">
        Show {{ postFilter === 'All' ? 'saved' : 'all' }} posts
      </button>
    </div>
    <div v-if="postStore.errMsg" class="error">{{ postStore.errMsg }}</div>
    <div v-if="postFilter === 'All'">
      <div v-for="post in postStore.sorted" :key="post.id">
        <MyWrapper>
          <PostItem :post="post" />
        </MyWrapper>
      </div>
    </div>
    <div v-if="postFilter === 'Saved'">
      <div v-for="post in postStore.saved" :key="post.id">
        <MyWrapper>
          <PostItem :post="post" />
        </MyWrapper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-width: 500px;
  max-width: 76%;
  margin: auto;
}
.header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 1px 10px 1px #60606e31;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      animation: spin 1s linear infinite;
    }
  }
}
button {
  background-color: #120eff;
  color: aliceblue;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 5px;
  &:hover {
    background-color: #254df2;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
}
.error {
  background: #f87171;
  color: #fff;
  border-radius: 10px;
  margin: 30px;
  text-align: center;
  padding: 1rem;
  font-weight: 700;
  font-size: 20px;
}
</style>
