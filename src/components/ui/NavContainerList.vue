<template>
    <Tabs value="0">
      <TabList>
        <div class="navigation">
          <Tab value="0" v-on="0" @click="actionTab.onClickTabSession()">{{ tab }}</Tab>
          <Tab value="1" v-on="1" @click="actionTab.onClickTabTask()">Tarefas</Tab>
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
const actionTab = useActionNavigation();

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
