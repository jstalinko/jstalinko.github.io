<template>

    <section class="p-5">
        <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">💁 Who's ? <svg
                class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg></h2>
            <div class="flex flex-col md:flex-row">
                <div>
                    <img src="/jst.png" class="max-w-50 mr-5 "/>
                </div>
                <div>
        <p
            class="ml-2 mt-10 bg-gradient-to-r from-red-500 via-blue-900 to-yellow-600 text-transparent bg-clip-text bg-300% animate-gradient">
          
            Alin Koko Mansuby is a Web Developer based on Jepara, Central Java , Indonesia with a passion for
            building
            digital services/stuff he wants. Experienced in writing PHP programming language since high school, has
            handled
            various projects using either framework or native PHP.
            He has a knack for all things launching products, from planning and designing all the way to solving
            real-life
            problems with code.
        </p>
    </div>
    </div>
    <p class="ml-2 mt-2 bg-gradient-to-r from-red-500 via-blue-900 to-yellow-600 text-transparent bg-clip-text bg-300% animate-gradient">
       He like to write code and thinking about new idea and create the innovation for
            future,
            Actually he is quite lazy ,so he often makes automation tools for him project.
    </p>
    </section>

    <section class="p-5">
        <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">🤸 What I can do?
            <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>
        </h2>
        <p
            class="mt-2 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
            Even though I don't have a college degree, I've done a lot of things that maybe people out there don't
            do.
            Names without titles are often doubted by others. So, therefore I never to work with company and choose
            my way
            to work as freelancer and make my own project.

            Besides I can write code, I also can analyze weaknesses, analyze vulnerabilities, and sometimes find
            crazy
            solutions from problems found, like make automation tools to speed up work,and even made my own
            framework.

            When I working as freelancer , I work by my self so from there i learning new things and my talent keeps
            growing
            with time.
            I did it indirectly, Writing Code, Testing It and deploy it by my self.
        </p>
    </section>

    <section class="p-5">

        <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">
            📄 Latest Posts
            <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>
        </h2>
        <ul className="mt-2">

            <li class="flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600"
                v-for="(post, index) in posts" :key="post.slug">
                <NuxtLink :to="'/blog/'+post.slug+''">{{ iconPost[index] }} {{ post.title }}</NuxtLink>
                <span>[{{ new Date(post.createdAt).toDateString() }}]</span>
            </li>

        </ul>
        <NuxtLink to="/blog" class="mt-2 block text-center text-black font-bold hover:text-amber-800">📚 More
            Posts</NuxtLink>

    </section>

</template>

<script lang="ts" setup>

const iconPost: any = ref({
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
});
const posts: any = ref([]);
const getPost: any = await $fetch('/api/post?method=limit&limit=11');
posts.value = getPost.body;


</script>