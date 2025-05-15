<!-- src/App.vue -->
<template>
  <NavBar />
  <Header />
  <section class="section">
    <div class="container">
      <RouterView />
    </div>
  </section>
  <Footer />
</template>



<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<style scoped>
</style>
