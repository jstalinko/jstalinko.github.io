<template>
    <Layout>
      <h1 class="text-4xl font-semibold mb-1">📖  {{ $page.post.title }}</h1>
      <span class="font-light">📅 {{ $page.post.date }}</span>
      
      <div class="ml-3 mr-3 mt-8 mb-16 prose lg:prose-lg xl:prose-xl" v-html="$page.post.content" />

      <div class="mt-5">
        <!-- social media shareer -->
        <div class="flex justify-center">
          <b class="text-lg m-3">🌱 Share :</b>

          <a :href="'https://twitter.com/intent/tweet?text='+$page.post.title+'&url='+$page.url+''"
            class="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
            <i class="mdi mdi-twitter"></i>
          </a>
          <a :href="'https://www.facebook.com/sharer/sharer.php?u='+$page.url+''"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2">
            <i class="mdi mdi-facebook"></i>
          </a>
          <a :href="'https://www.linkedin.com/shareArticle?mini=true&url='+$page.url+'&title='+$page.post.title+''"
            class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ml-2">
             <i class="mdi mdi-linkedin"></i>
            </a>
            <a :href="'https://wa.me/?text='+$page.url+''" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2">
              <i class="mdi mdi-whatsapp"></i>
              </a>
            </div>
      </div>
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