<template>
  <Layout>
    <section class="p-5">

      <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">
        📄 Blog Posts
        <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
        </svg>
      </h2>
      <ul className="mt-2">

        <li class="flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600"
          v-for="(post, index) in $page.posts.edges" :key="post.path">
          <g-link :to="post.node.path">{{ iconPost[index] }} {{ post.node.title }}</g-link>
          <span>[{{ post.node.date }}]</span>
        </li>

      </ul>
      <g-link to="/blog" class="mt-2 block text-center text-black font-bold hover:text-amber-800">📚 More Posts</g-link>

    </section>
  </Layout>
</template>

<page-query>
  query Posts {
    posts: allBlogPost (sortBy: "date", order: DESC) {
      edges {
        node {
          title
          date (format: "MMMM D, Y")
          path
        }
      }
    }
  }
  </page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog Posts'
  },
  data() {
    return {
      iconPost:{
        0: '🔥',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
        10: '🔟',
      }
    }
  },
}
</script>