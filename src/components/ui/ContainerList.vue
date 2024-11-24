<template>
  <main class="container-list">
    <NavContainerList :itensNavigation="itensNavigation">
      <template #session>
        <ListGroupItem  :session="session"/>
      </template>
      <template #allTasks>
        <ListTaskItem :task="task"/>
      </template>
    </NavContainerList>

  </main>
</template>

<script setup lang="ts">
import ListGroupItem from '@/components/ui/ListGroupItem.vue';
import NavContainerList from './NavContainerList.vue';
import ListTaskItem from './ListTaskItem.vue';
import { type Session } from '../../interfaces/Session';
import { type Task } from '../../interfaces/Task';

const { itensNavigation } = defineProps({
  itensNavigation: Array<string>,
});

const session: Session[]  = [
  {id: 0, name: 'Faculdade', alltasks: '10', alltasksFinished: '10', image: '/src/assets/brasil.jpg'},
  {id: 1, name: 'Trabalho', alltasks: '20', alltasksFinished: '13', image: '/src/assets/brasil.jpg'},
  {id: 2, name: 'Trabalho', alltasks: '20', alltasksFinished: '13', image: '/src/assets/brasil.jpg'},
  {id: 3, name: 'Trabalho', alltasks: '20', alltasksFinished: '13', image: '/src/assets/brasil.jpg'},
  {id: 4, name: 'Trabalho', alltasks: '20', alltasksFinished: '13', image: '/src/assets/brasil.jpg'},
  {id: 5, name: 'Trabalho', alltasks: '20', alltasksFinished: '13', image: '/src/assets/brasil.jpg'},
];

const task: Task[] = [
  {id: 0, name: 'Fazer o L',  description: 'Teste Teste Teste Teste Teste ', timePeriod: '12/12/2024', status: 'A Fazer', priority: 1},
  {id: 0, name: 'Fazer o L', timePeriod: '12/12/2024', status: 'A Fazer', priority: 1},
  {id: 0, name: 'Fazer o L', timePeriod: '12/12/2024', status: 'A Fazer', priority: 1},
  {id: 0, name: 'Fazer o L', timePeriod: '12/12/2024', status: 'A Fazer', priority: 1},
  {id: 0, name: 'Fazer o L',  description: 'Teste Teste Teste Teste Teste ', timePeriod: '12/12/2024', status: 'A Fazer', priority: 1},
  {id: 0, name: 'Fazer o L',  description: 'Teste Teste Teste Teste Teste ', timePeriod: '12/12/2024', status: 'A Fazer', priority: 1},
];
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
