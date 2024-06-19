<template>
    <div>
        <div class="container p-5">
            <h2 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current mb-5">
                ➕ New Post
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
            </h2>

            <form class="shadow rounded-lg p-5 m-5" @submit.prevent="createPost">
                <div class="mb-2">
                <label htmlFor="name">Title</label>
                <input type="text"  class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500" v-model="title"/>
                </div>
                <div class="mb-2">
                <label htmlFor="name">Content</label>
               
                <TiptapEditor v-model="content" />
                </div>
                <div class="mb-2">
                <label htmlFor="name">Author</label>
                <input type="text"  class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500" v-model="author"/>
                </div> 
                <div class="mb-2">
                <label htmlFor="name">Password</label>
                <input type="text"  class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500" v-model="password"/>
                </div>  
                <div class="mb-2">
                <NuxtTurnstile v-model="token" />
                </div>

                <button class="mt-4 p-2 bg-black text-white  hover:bg-gray-600 w-full" type="submit">Create</button>
            
            </form>

        </div>
    </div>
</template>

<script lang="ts" setup>
import type TiptapEditor from '~/components/TiptapEditor.vue';

const title = ref('');
const content = ref('');
const author = ref('');
const token = ref('');
const password = ref('');


const createPost = async() => {
    const res: any = await $fetch('/api/post',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                title: title.value,
                content: content.value,
                author: author.value,
                token: token.value,
                password: password.value
            
            }
        }
    );
    console.log(res);
}

</script>