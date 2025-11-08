<!-- src/views/RandomQuote.vue -->
<template>
  <div>
    <h1>Random Quote Generator</h1>
    <p v-if="loading">Loading...</p>
    <p v-else>"{{ quote }}"</p>
    <button @click="getQuote">Get New Quote</button>
    <!-- Go back button -->
    <GoBackButton />
  </div>
</template>

<script>
import GoBackButton from '../components/GoBackButton.vue';

export default {
  name: 'RandomQuotePage',
  components: {
    GoBackButton
  },
  data() {
    return {
      quote: '',
      loading: false
    };
  },
  methods: {
    async getQuote() {
  this.loading = true;
  try {
    const response = await fetch(
      'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
          'X-RapidAPI-Key': '98e6542a07msh1c2e8d07d2cba11p1fb293jsn10c4bbcae964'
        }
      }
    );
    const data = await response.json();
    this.quote = data.content;
  } catch (error) {
    console.error(error);
    this.quote = 'Failed to fetch quote.';
  } finally {
    this.loading = false;
  }
}

  },
  mounted() {
    this.getQuote();
  }
};
</script>

<style>
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>

