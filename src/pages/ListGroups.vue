<template>
  <ContainerMain>
    <template #main>
      <CenterContent>
        <template #title>
          <TitleHeader title="Leopple To do " />
        </template>
        <template #button>
          <BtnAdd label=" + Criar Grupo "/>
        </template>
        <template #list>
          oi
        </template>
      </CenterContent>
    </template>
  </ContainerMain>
</template>

<script setup lang="ts">
import ContainerMain from '@/components/container/ContainerMain.vue';
import TitleHeader from '@/components/ui/TitleHeader.vue';
import CenterContent from '@/components/layout/CenterContent.vue';
import BtnAdd from '@/components/ui/BtnAdd.vue';

</script>

<style scope>
h1 {}
</style>
