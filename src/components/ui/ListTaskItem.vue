<template>
  <DataView :value="props.task" data-key="id" paginator :rows="5">
    <template #list="slotProps">
      <div>
        <div v-for="(item, index) in slotProps.items" :key="index" class="item-list">
          <section class="container-item-img">
            <article class="container-btn">
              <Button icon="pi pi-check" aria-label="Filter" severity="success" variant="outlined"/>
            </article>
            <article class="container-name">
              <p>{{ item.name }}</p>
              <p class="description">{{ item.description }}</p>
            </article>
          </section>
          <section class="container-info-tasks">
            <div class="info-tasks">
              <p>Status</p>
              <p>{{ item.status }}</p>
            </div>
            <div class="info-tasks">
              <p>Prazo</p>
              <p>{{ item.timePeriod }}</p>
            </div>
            <div class="info-tasks">
              <p>Prioridade</p>
              <p>{{ item.priority }}</p>
            </div>
            <div class="info-tasks">
              <BtnOptionItem />
            </div>
          </section>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script setup lang="ts">
import { DataView, Button } from 'primevue';
import BtnOptionItem from './BtnOptionItem.vue';
import { type Task } from './../../interfaces/Task';

const props = defineProps<{ task: Task[] }>();
</script>

<style scoped>
.item-list {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.container-item-img {
  display: flex;
  flex-direction: row;
  align-items: center;
}

img, .container-btn {
  width: 5.5rem;
  border-radius: 5px;
}

.container-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-name {
  margin-left: 5px;
}

.container-info-tasks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.info-tasks {
  margin: 0 15px;
  text-align: center;
}

.description {
  font-size: 0.6em;
}
</style>
