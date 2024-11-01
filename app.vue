<template>
  <Navbar/>
  <Hero id="home"/>
  <About id="about"/>
  <Projects id="project"/>
  <Contact id="contact"/>
  <Footer/>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - JUSTALINKO` : 'JUSTALINKO - Software Engineer';
  }
})
</script>
<style>
h1,h2,h3,h4,h5,.space-grotesk {
  font-family: 'Space Grotesk', sans-serif;
}

body,html ,.ubuntu-font{
  font-family: 'Ubuntu Mono', monospace;
}
</style>