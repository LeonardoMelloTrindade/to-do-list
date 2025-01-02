<template>
  <ContainerMain>
    <template #main>
      <CenterContent>
        <template #title>
          <TitleHeader title="Grupos de tarefas" />
        </template>
        <template #button>
          <BtnAdd label="Grupo"/>
        </template>
        <template #list>
          <ContainerList tab="Grupos"/>
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
import BtnAdd from '@/components/ui/BtnAdd.vue';
</script>