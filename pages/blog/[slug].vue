<template>
    <div>

      <h1 class="text-4xl font-semibold mb-1">📖  {{ post.title }}</h1>
      <span class="font-light">📅 {{ new Date(post.createdAt).toDateString() }}</span>
      
      <div class="ml-3 mr-3 mt-8 mb-16" ><p class=" prose lg:prose-lg xl:prose-xl" v-html="post.content"></p></div>


      <div class="mt-5">
        <!-- social media shareer -->
        <div class="flex justify-center">
          <b class="text-lg m-3">🌱 Share :</b>

          <a :href="'https://twitter.com/intent/tweet?text='+post.title+'&url='+url+''"
            class="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
            <i class="mdi mdi-twitter"></i>
          </a>
          <a :href="'https://www.facebook.com/sharer/sharer.php?u='+url+''"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2">
            <i class="mdi mdi-facebook"></i>
          </a>
          <a :href="'https://www.linkedin.com/shareArticle?mini=true&url='+url+'&title='+post.title+''"
            class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ml-2">
             <i class="mdi mdi-linkedin"></i>
            </a>
            <a :href="'https://wa.me/?text='+url+''" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2">
              <i class="mdi mdi-whatsapp"></i>
              </a>
              <!-- share ig story -->
              <a href="#" @click="shareIgStory"
                class="bg-red-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full ml-2">
                <i class="mdi mdi-instagram"></i>
              </a>
        
            </div>
      </div>
    
    </div>
</template>

<script lang="ts" setup>


const post = ref({
  title: '',
  date: '',
  content: '',
  author: '',
});
const config = useRuntimeConfig();
const route = useRoute();
const url = config.public.baseUrl + route.fullPath;
const slug = route.params.slug;
const getPost = async() => {

  const getPost: any = await $fetch('/api/post?method=slug&slug='+slug);
  post.value = getPost.body;
  useHead({
    title: post.value.title + " - JUSTALINKO"
});
}; 



const shareIgStory = () => {
  // copy link to clipboard
  navigator.clipboard.writeText(url);
  alert('Link copied to clipboard');
  return window.location.href = 'https://www.instagram.com/stories/create';

};
onMounted(async () => {
  await getPost();
});

</script>