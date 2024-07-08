import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  //data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'This great book!',
          body: 'Lorem ipsum corpus text',
          author: 'John Doe',
          created_at: '11/06/2023',
          is_saved: false
        },
        {
          id: 2,
          title: 'This great book!',
          body: 'Lorem ipsum corpus text',
          author: 'John Doe',
          created_at: '11/06/2023',
          is_saved: false
        },
        {
          id: 3,
          title: 'This great book!',
          body: 'Lorem ipsum corpus text',
          author: 'John Doe',
          created_at: '11/06/2023',
          is_saved: false
        },
        {
          id: 4,
          title: 'This great book!',
          body: 'Lorem ipsum corpus text',
          author: 'John Doe',
          created_at: '11/06/2023',
          is_saved: false
        },
        {
          id: 5,
          title: 'This great book!',
          body: 'Lorem ipsum corpus text',
          author: 'John Doe',
          created_at: '11/06/2023',
          is_saved: false
        }
      ]
    }
  },
  //computed
  getters: {
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    saved: (state) =>
      state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },
  //methods
  actions: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Serval T@Nonoverse',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
    }
  }
})
