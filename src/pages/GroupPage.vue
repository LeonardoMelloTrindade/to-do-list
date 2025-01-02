<template>
    <ContainerMain>
      <template #main>
        <CenterContent>
          <template #title>
            <div class="breadcrumb">
              <Breadcrumb />
            </div>
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
  import Breadcrumb from '@/components/ui/BreadCrumb.vue';
  </script>
  
  <style scoped>
    .breadcrumb {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }
  </style>