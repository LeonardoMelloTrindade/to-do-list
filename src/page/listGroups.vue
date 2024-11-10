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
import ContainerMain from '@/components/container/containerMain.vue';
import TitleHeader from '@/components/ui/titleHeader.vue';
import CenterContent from '@/components/layout/centerContent.vue';
import BtnAdd from '@/components/ui/btnAdd.vue';

</script>

<style scope>
h1 {}
</style>
