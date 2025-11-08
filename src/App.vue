<template>
  <div id="app" class="container">
    <!-- Navigation Menu -->
    <nav>
      <router-link to="/">Random Quotes</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>

    <!-- Router View: renders the component for the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 20px;
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

