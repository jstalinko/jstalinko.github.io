<template>
    <section class="bg-gray-50">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Hello, I'm Alin Koko Mansuby
            <strong class="font-extrabold text-red-700 sm:block">Software <span class="text-black">Engineer</span></strong>
          </h1>
    
          <p class="mt-4 sm:text-xl/relaxed">
            🔥 A backend developer with over {{ experienceYear }} years of experience, specializing in building and maintaining the server-side logic of web applications.
          </p>
    
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get In Touch 👋
            </a>
    
            <a
              class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
            My Resume 📰
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>

<script setup lang="ts">
const firstYear = 2016;
const nowYear = new Date().getFullYear();
const experienceYear = nowYear-firstYear; 
</script>