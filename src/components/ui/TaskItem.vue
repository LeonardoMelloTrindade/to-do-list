<template>
  <DataView :value="props.session" data-key="id" paginator :rows="5">
    <template #list="slotProps">
      <div>
        <div v-for="(item, index) in slotProps.items" :key="index" class="item-list">
          <section class="container-item-img">
            <article class="container-img">
              <Button />
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
import { DataView, Button } from 'primevue';
import BtnOptionItem from './BtnOptionItem.vue';

interface Session {
  id: number,
  name: string,
  alltasks: string,
  alltasksFinished: string,
  image?: string
}


const props = defineProps<{ session: Session[] }>();
</script>

<style scoped>
p {
  text-align: center;
}

.item-list {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding-bottom: 5px;
  border-bottom: 2px solid gray;
}

.container-item-img {
  display: flex;
  flex-direction: row;
}

img, .container-img {
  height: 100%;
  width: 5.5rem;
  border-radius: 5px;
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
