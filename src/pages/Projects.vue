<template>
    <Layout>
        <div class="container">
            <h1 class="text-black text-2xl mx-1 font-extrabold  relative inline-block stroke-current">🖥️ My Projects
                <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
            </h1>

            <div class="grid grid-cols-2 mt-4 gap-3 mr-3">
                <!-- make card grid like github repository -->
                <div
                    class="border-2 border-gray-500 gap-2 rounded-lg hover:border-black hover:shadow-lg bg-gradient-to-r from-transparent via-slate-100 to-gray-400 hover:bg-gradient-to-r hover:from-gray-400 hover:via-slate-100 hover:to-white" v-for="repo in repositories" :key="repo.id">
                    <g-link :to="repo.html_url" target="_blank">
                        
                    <div class="flex justify-between p-3">
                        <h3 class="text-xl hover:underline">{{ repo.name }}</h3>
                        <div class="bg-gray-600 rounded p-1 text-white text-xs font-serif">{{ repo.language }}</div>
                    </div>
                    </g-link>

                    <p class="text-small p-3">
                        {{ repo.description }}
                    </p>

                </div>
            </div>

        </div>
    </Layout>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            repositories: {}
        }
    },
    async mounted() {

        try {
            let api1 = 'https://api.github.com/users/jstalinko/repos'
            let api2 = 'https://api.github.com/users/justalinko/repos'
            const results = await axios.get(api1)
          //  const results2 = await axios.get(api2)
            

            this.repositories = results.data
          //  this.repositories = results2.data
            
            console.log(results.data)
        } catch (error) {
            console.log(error)
        }

    },
}
</script>