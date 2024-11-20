<template>
  <div class="container">
    <article class="container-group">
      <div>
        {{ name }}
      </div>
      <div class="container-tasks">
        <span>Tarefas totais: {{ alltasks }}</span>
        <span>Tarefas finalizadas: {{ alltasksFinished }}</span>
        <span>3 pontios</span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { theme } from '@/styles/theme';

const { name, alltasks, alltasksFinished } = defineProps(['name', 'alltasks', 'alltasksFinished']);
</script>

<style scoped>
span:nth-child(1), span:nth-child(2) {
  margin-right: 10px;
}

.container {
  display: flex;
  justify-content: center;
}

.container-group {
  color: v-bind('theme.background');
  border: 1px solid v-bind('theme.background');
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 5px;
}
</style>
