<template>
  <div class="home-page">

    <!-- Quote of the Day -->
    <section class="box has-background-light mb-5">
      <h2 class="title is-5 has-text-centered">Quote of the Day</h2>
      <blockquote class="has-text-centered">
        "{{ currentQuote.quotation }}"
        <footer class="mt-2 is-italic">— {{ currentQuote.source }}</footer>
      </blockquote>
      <div class="has-text-centered mt-3">
        <button class="button is-small is-link" @click="getRandomQuote">New Quote</button>
      </div>
    </section>

    <!-- Search Box -->
    <div class="field">
      <div class="control">
        <input
          type="text"
          class="input"
          placeholder="Search blog titles..."
          v-model="searchTerm"
        />
      </div>
    </div>

    <!-- Blog Cards | v-for list rendering -->
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="post in paginatedPosts" :key="post.id">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                :src="`/images/${post.picture}`"
                :alt="post.title"
                loading="lazy"
                style="object-fit: cover; height: 130px;"
              />
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-6 mb-1">
              <RouterLink :to="`/${post.page}`">{{ post.title }}</RouterLink>
            </p>
            <p class="content is-size-7">{{ post.synopsis }}</p>
            <p class="is-size-7 has-text-grey mt-2">
              {{ formatDate(post.published) }}
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
                <RouterLink :to="`/${post.page}`" class="button is-link is-small">  Read More ... </RouterLink>
            </p>
          </footer>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <nav class="pagination is-centered mt-5" role="navigation" aria-label="pagination" v-if="totalPages > 1">
      <ul class="pagination-list">
        <li v-for="page in totalPages" :key="page">
          <button
            class="pagination-link"
            :class="{ 'is-current': currentPage === page }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { quotes } from '../data/random_quotes2';
import postsData from '../data/data_standandspeakconfidently2.json';

// Type
interface Quote {
  id: number;
  category: string;
  source: string;
  quotation: string;
}

/*   refactor this later 
interface BlogPost {
  id: number;
  title: string;
  synopsis: string;
  picture: string;
  page: string;
  tags: string[];
  published: string;
}
*/
// Quotes
const currentQuote = ref<Quote>(quotes[0]);
const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  currentQuote.value = quotes[index];
};

// Blog posts | pagination, search, & formatted date  
const searchTerm = ref('');
const currentPage = ref(1);
const postsPerPage = 10;

const sortedPosts = computed(() =>
  [...postsData].sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
);

const filteredPosts = computed(() =>
  sortedPosts.value.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / postsPerPage)
);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  return filteredPosts.value.slice(start, start + postsPerPage);
});

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

onMounted(() => {
  getRandomQuote();
});
</script>
