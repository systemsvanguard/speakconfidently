<template>
  <div class="content">
    <h1 class="title is-3">Articles by Tags</h1>

    <div v-for="tag in tagList" :key="tag" class="mb-6">
      <h2 class="subtitle is-4">{{ tag }}</h2>
      <table class="table is-striped is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in getPostsByTag(tag)" :key="post.id">
            <td><RouterLink :to="`/${post.page}`">{{ post.title }}</RouterLink></td>
            <td>{{ formatDate(post.published) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import posts from '../data/data_standandspeakconfidently2.json';
// import { useHead } from 'vue-meta';

interface BlogPost {
  id: number;
  title: string;
  page: string;
  tags: string[];
  published: string;
}

const tagList = ['Tips', 'Writing', 'Speaking', 'Delivery'];

const getPostsByTag = (tag: string) =>
  posts.filter((post: BlogPost) => post.tags.includes(tag));

const formatDate = (str: string) => {
  const date = new Date(str);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

// Meta Tags for SEO | vue-meta@3 
// Vue Meta is proving extremely problematic.  Backing it out for now.
/*
useHead({
  title: 'Stand and Speak Confidently - Home',
  meta: [
    {
      name: 'description',
      content: 'A blog to make you a more confident & competent Public Speaker & presenter.'
    }
  ]
});
*/
</script>
