<template>
  <main class="container-list">
    <!-- <nav class="navigation" v-if="itensNavigation?.length !== 0">
      <span v-for="item of itensNavigation" :key="item" class="itens-navigation">
        {{ item }}
      </span>
    </nav>
    <nav class="navigation" v-else>
      <span class="itens-navigation">{{ itensNavigation[0] }}</span>
    </nav>
    <section class="list">
    </section> -->
    <NavContainerList :itensNavigation="itensNavigation">
      <template #session>
        <ListGroupItem  name="Faculdade" alltasks="10" alltasks-finished="5"/>
        <ListGroupItem  name="Trabalho" alltasks="10" alltasks-finished="11"/>
      </template>
      <template #allTasks>
        <div>Tasks</div>
      </template>
    </NavContainerList>

  </main>
</template>

<script setup lang="ts">
import ListGroupItem from '@/components/ui/ListGroupItem.vue';
import NavContainerList from './NavContainerList.vue';

const { itensNavigation } = defineProps({
  itensNavigation: Array<string>,
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
