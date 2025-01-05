<template>
  <ContainerMain>
    <template #main>
      <CenterContent>
        <template #title>
          <div class="breadcrumb">
            <Breadcrumb :path="path ? [path] : []"/>
          </div>
          <TitleHeader :title="groupFound?.name" />
        </template>
        <template #button>
          <BtnAdd label="Categoria"/>
        </template>
        <template #list>
          <div v-if="groupFound">
            <ContainerList
              tab="Categorias"
              :category="groupFound.categories"
              :tasks="groupFound.tasks"
            />
          </div>
          <div v-else>
            <p>Grupo não acessível...</p>
          </div>
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
import { onBeforeMount, ref } from 'vue';
import { useGroupStore } from '@/store/GroupStore';
import { useRoute } from 'vue-router';
import { type Group } from '@/interfaces/Group';
import { type PathBreadcrumb } from '@/interfaces/PathBreadcrumb';

const route = useRoute();
const group = useGroupStore();
const groupFound = ref<Group>();
const path = ref<PathBreadcrumb | undefined>(undefined);

onBeforeMount(() => {
  groupFound.value = group.findGroupById(route.params.id)!;
  if (!groupFound.value) {
    throw new Error(`Group with ID ${route.params.id} not found`);
  }
  path.value = { label: groupFound.value?.name, route: `/group/${groupFound.value?.id}` };
});
</script>

<style scoped>
.breadcrumb {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

p {
  color: black;
}
</style>
