<template>
    <Layout>
      <h1 class="text-4xl font-semibold mb-1">📖  {{ $page.post.title }}</h1>
      <span class="font-light">📅 {{ $page.post.date }}</span>
      <div class="ml-8 mt-8 mb-16 prose lg:prose-lg xl:prose-xl" v-html="$page.post.content" />
    </Layout>
  </template>
  
  <page-query>
  query Post ($path: String!) {
    post: blogPost (path: $path) {
      title
      date (format: "MMMM D, Y")
      content
    }
  }
  </page-query>
  
  <script>
  export default {
    metaInfo () {
      return {
        title: this.$page.post.title + ' JUSTALINKO'
      }
    },
  }
  </script>