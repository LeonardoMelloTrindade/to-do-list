<template>
  <Button severity="secondary" icon="pi pi-plus" :label="label" raised/>
</template>

<script setup lang="ts">
import { Button } from 'primevue';

const { label } = defineProps(['label']);
</script>


