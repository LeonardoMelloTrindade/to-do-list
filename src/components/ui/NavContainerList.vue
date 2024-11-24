<template>
    <Tabs value="0">
      <TabList>
        <div class="navigation">
          <Tab :value="index.toString()" v-for="item, index of itensNavigation" :key="item">{{ item }}</Tab>
        </div>
      </TabList>
      <TabPanels class="list">
        <TabPanel value="0">
          <slot name="session"></slot>
        </TabPanel>
        <TabPanel value="1">
          <slot name="allTasks"></slot>
        </TabPanel>
      </TabPanels>
    </Tabs>
</template>

<script setup lang="ts">
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primevue';


const { itensNavigation } = defineProps({
  itensNavigation: Array<string>,
});
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
