<template>
  <ContainerMain>
    <template #main>
      <CenterContent class="table">
        <template #title>
          <TitleHeader title="Grupos de tarefas" />
        </template>
        <template #button>
          <ModalTriggerCreate label="Grupo"/>
        </template>
        <template #list>
          <ContainerList tab="Grupos" :group="groups" :tasks="tasks"/>
        </template>
      </CenterContent>
    </template>
  </ContainerMain>
</template>

<script setup lang="ts">
import TitleHeader from '@/components/ui/TitleHeader.vue';
import ContainerList from '@/components/ui/ContainerList.vue';
import ContainerMain from '@/components/container/ContainerMain.vue';
import CenterContent from '@/components/layout/CenterContent.vue';
import ModalTriggerCreate from '@/components/ui/ModalTriggerCreate.vue';
import { useGroupStore } from '@/store/GroupStore';
import { useTaskStore } from '@/store/TasksStore';

const { tasks } = useTaskStore();
const { groups } = useGroupStore();
</script>