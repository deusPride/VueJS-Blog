<script setup>
import { ref } from 'vue'
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()
const postFilter = ref('All')

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'All' ? 'Saved' : 'All'
}
</script>

<template>
  <div class="header">
    <div>
      <h2>{{ postFilter }} posts</h2>
    </div>
    <button @click="setPostFilter">Show {{ postFilter === 'All' ? 'saved' : 'all' }} posts</button>
  </div>
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
</template>

<style lang="scss" scoped>
.header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 1px 10px 1px #60606e31;
  button {
    background-color: #120eff;
    color: aliceblue;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 5px;
    &:hover {
      background-color: #254df2;
    }
  }
}
</style>
