<template>
  <button @click="$router.back()">Go Back</button>
</template>

<script>
export default {
  name: 'GoBackButton'
}
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 14px;
}
</style>
