<template>
  <button>{{ label }}</button>
</template>

<script setup lang="ts">
import { theme } from '@/styles/theme';

const { label } = defineProps(['label']);


</script>

<style scoped>
button {
  background-color: v-bind('theme.highlight');
  width: 10em;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  box-shadow: 3px 5px 1px #7e7e7e;
  transition: 0.5s;
}
</style>
