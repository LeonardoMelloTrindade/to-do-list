<template>
  <main class="background">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { theme } from '@/styles/theme';

</script>

<style scoped>
.background {
  background-color: v-bind('theme');
}
</style>
