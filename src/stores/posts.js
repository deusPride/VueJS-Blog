import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  //data
  state() {
    return {
      posts: [],
      loading: true
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
    getPosts() {
      fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.loading = false
        })
        .catch((err) => {
          this.errMsg = 'Something went wrong'
          this.loading = false
          console.log(err)
        })
    },
    addPost(post) {
      const newPost = {
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Serval T@Nonoverse',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      }
      this.posts.push(newPost)
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newPost)
      }).catch()
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
      }).catch()
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ is_saved: post.is_saved })
      }).catch()
    }
  }
})
