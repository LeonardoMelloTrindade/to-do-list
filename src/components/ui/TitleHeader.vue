<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
const { title } = defineProps(['title']);

</script>

<style scoped>
h1 {
  font-size: 4em;
}
</style>
