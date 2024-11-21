<script setup lang="ts">

usePageStore().pageData.title = 'Homepage'
</script>

<template>
  <div>
    <h1>Main Home Page</h1>
    <RouterLink to="/projects">Go to Projects?</RouterLink>
  </div>
</template>

<style scoped>

</style>
