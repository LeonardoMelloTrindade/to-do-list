<template>
  <Button icon="pi pi-plus" :label="label" severity="primary"/>
</template>

<script setup lang="ts">
// import { theme } from '@/styles/theme';
import { Button } from 'primevue';

const { label } = defineProps(['label']);


</script>

<style scoped>
button:hover {
  box-shadow: 3px 5px 1px #7e7e7e;
  transition: 0.5s;
}
</style>
