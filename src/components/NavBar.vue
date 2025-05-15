<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar is-purple" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item has-text-weight-bold" to="/">Stand & Speak Confidently</RouterLink>
      <a role="button" class="navbar-burger" :class="{ 'is-active': isActive }" @click="toggleBurger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <RouterLink class="navbar-item" to="/">Home</RouterLink>
        <RouterLink class="navbar-item" to="/tags">Tags</RouterLink>
        <RouterLink class="navbar-item" to="/about">About</RouterLink>
        <RouterLink class="navbar-item" to="/contact">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isActive = ref(false);
const toggleBurger = () => { isActive.value = !isActive.value };
</script>

<style scoped>
.navbar.is-purple {
  background-color: #6a1b9a;
}
.navbar .navbar-item,
.navbar .navbar-link {
  color: white;
}
.navbar .navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
