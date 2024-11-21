<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h1>ERROR</h1>
    <h3>Project {{ route.params?.id }} not found!</h3>
  </div>
</template>

<style scoped>

</style>
