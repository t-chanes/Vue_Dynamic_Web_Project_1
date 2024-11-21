<script setup lang="ts">
import ErrorPage from '@/components/AppError/ErrorPage.vue'

useErrorStore().setError({ error: 'Page not found', customCode: 404 })
</script>

<template>
  <div></div>
</template>
