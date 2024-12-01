<template>
  <DataView :value="props.session" data-key="id" paginator :rows="5">
    <template #list="slotProps">
      <div>
        <div v-for="(item, index) in slotProps.items" :key="index" class="item-list">
          <section class="container-item-img">
            <article class="container-img">
              <img :src="item.image" :alt="item.name">
            </article>
            <article class="container-name">
              <p>{{ item.name }}</p>
            </article>
          </section>
          <section class="container-info-tasks">
            <div class="info-tasks">
              <p>Total de tarefas</p>
              <p>{{ item.alltasks }}</p>
            </div>
            <div class="info-tasks">
              <p>Tarefas finalizadas</p>
              <p>{{ item.alltasksFinished }}</p>
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
import { DataView } from 'primevue';
import BtnOptionItem from './BtnOptionItem.vue';
import { type Session } from '@/interfaces/Group';


const props = defineProps<{ session: Session[] }>();
</script>

<style scoped>
p {
  text-align: center;
}

.item-list {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.container-item-img {
  display: flex;
  flex-direction: row;
}

img {

  height: 5.2rem;
  width: 5.2rem;
  border-radius: 5px;
}

.container-img {
  display: flex;
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
}
</style>
