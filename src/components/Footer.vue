<!-- src/components/Footer.vue -->
<template>
  <footer class="footer has-background-light pt-5">
    <div class="content has-text-centered">
      <p class="is-size-4">Copyright © 2023 - {{ currentYear }} <strong>Stand and Speak Confidently</strong> | All rights reserved.</p>
      
      <p class="is-size-5">
        Coding Portfolio at <a href="https://ryanhunter.ca/code/" class="link_no_underline"><strong>RyanHunter.ca</strong></a> | GitHub username <span style="color:#00008b;font-weight: bold;font-style: italic;"><a href="https://github.com/systemsvanguard" class="link_no_underline">SystemsVanguard</a></span>. 
        <br />
        A portfolio site built using <a href="https://vuejs.org/">Vue.js</a>, <a href="https://bulma.io">Bulma CSS</a>, <a href="https://fonts.google.com/">Google Fonts</a>, <a href="https://fontawesome.com/">FontAwesome 5</a>, JavaScript, CSS, HTML5, and lots of love <span style="color:#ff0000;">&#9829;</span> <span style="color:#00008b;">&#9825;</span> <span style="color:#00008b;">&#9829;</span>!!  
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

