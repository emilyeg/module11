<template>
  <div>
    <h1>About Me!</h1>
    <p>
      Welcome! This is a little bit about me! My name is Emily and I aspire to be a UX Researcher helping businesses figure out what is and is not working with their online presence. In my free time I like to read and write, also go to concerts and travel!
    </p>
    <GoBackButton />
  </div>
</template>

<script>
import GoBackButton from '../components/GoBackButton.vue'

export default {
  name: 'AboutPage',
  components: {
    GoBackButton
  }
}
</script>

