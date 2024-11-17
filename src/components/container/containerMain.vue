<template>
  <main class="grid-pillar">
    <PillarLayout position="right"/>
    <slot name="main"></slot>
    <PillarLayout position="left"/>
  </main>
</template>

<script setup lang="ts">
import PillarLayout from '../layout/PillarLayout.vue';



</script>

<style scoped>
.grid-pillar {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
}


</style>
