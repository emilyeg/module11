<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>This page does not exist.</p>
    <!-- Go Back Button -->
    <GoBackButton />
  </div>
</template>

<script>
import GoBackButton from '../components/GoBackButton.vue';

export default {
  name: 'NotFoundPage',
  components: {
    GoBackButton
  }
};
</script>

<style>
h1 {
  color: red;
  text-align: center;
  margin-top: 50px;
}
p {
  text-align: center;
  margin-bottom: 20px;
}
</style>

