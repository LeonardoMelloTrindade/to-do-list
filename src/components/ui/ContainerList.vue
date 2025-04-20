<template>
  <main class="container-list">
    <NavContainerList :tab="tab">
      <template #session>
        <ListGroupItem  :category="category" :group="group"/>
      </template>
      <template #allTasks>
        <ListTaskItem :task="tasks"/>
      </template>
    </NavContainerList>

  </main>
</template>

<script setup lang="ts">
import {  type PropType } from 'vue';
import ListGroupItem from '@/components/ui/ListGroupItem.vue';
import NavContainerList from './NavContainerList.vue';
import ListTaskItem from './ListTaskItem.vue';
import { type Group } from '@/interfaces/Group';
import { type Category } from '@/interfaces/Category';
import { type Task } from '@/interfaces/Task';

const {tab, group, category } = defineProps({
  tab: {
    type: String,
    required: true,
  },
  group: {
    type: Object as PropType<Group[]>,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => [],
  },
  category: {
    type: Object as PropType<Category[]>,
  },
  tasks: {
    type: Object as PropType<Task[]>,
    required: true,
  },
});
</script>

<style scoped>
.container-list {
  min-width: 450px;
  width: 80%;
  border: 1px solid;
  background-color: #18181b;
  min-height: 25rem;
  border-radius: 1.5em;
}

.navigation {
  color: #a4fff2;
  text-align: center;
  margin: 5px 0;
}

.list {
  margin-top: 5rem;
}

.itens-navigation:nth-child(1) {
  border-right: 2px solid rgb(114, 114, 114);
  padding-right: 16px;
  padding-left: 16px;
}

.itens-navigation:nth-child(2) {
  padding-left: 16px;
  padding-right: 16px;
}

.itens-navigation:nth-child(1), .itens-navigation:nth-child(2) {
  border-bottom: 2px solid rgb(114, 114, 114);
  padding-bottom: 2px;
}
</style>
