<template>
    <Tabs value="0">
      <TabList>
        <div class="navigation">
          <Tab class="nav-container-list__session-btn" value="0" @click="onClickTabSession()">{{ tab }}</Tab>
          <Tab class="nav-container-list__task-btn" value="1" @click="onClickTabTask()">Tarefas</Tab>
        </div>
      </TabList>
      <TabPanels class="list">
        <TabPanel value="0" >
          <slot name="session"></slot>
        </TabPanel>
        <TabPanel value="1">
          <slot name="allTasks"></slot>
        </TabPanel>
      </TabPanels>
    </Tabs>
</template>

<script setup lang="ts">
import { useActionNavigation } from '@/store/ActionNavigationStore';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primevue';

const { tab } = defineProps(['tab']);
const { onClickTabSession, onClickTabTask } = useActionNavigation();

</script>

<style scoped>
.navigation {
  margin-left: auto;
  margin-right: auto;
}

.list {
  margin-top: 3rem;
}
</style>
