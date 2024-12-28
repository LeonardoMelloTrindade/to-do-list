<template>
  <div :position="position"/>
</template>

<script setup lang="ts">
const { position } = defineProps(['position']);

const cssPosistioShadow = position === 'right' ? '10px' : '-10px';

</script>

<style scoped>
div {
  background-image: url('../../assets/imagePillar.jpg');
  background-repeat: repeat;
  background-size: cover;
  height: 100%;
  box-shadow: v-bind('cssPosistioShadow') 0px 10px 1px #7e7e7e;
}

</style>
