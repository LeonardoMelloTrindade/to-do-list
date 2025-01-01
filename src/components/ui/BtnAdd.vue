<template>
  <Button v-if="actionTab.isActiveTask" @click="openPosition" severity="secondary" icon="pi pi-plus" :label="`Criar ${label}`" raised />
  <Button v-else @click="openPosition" severity="secondary" icon="pi pi-plus" label="Criar Tarefa" raised />
  <ModalCreateSession :label="actionTab.isActiveTask ? label : 'Tarefa'" :visible="visible" @update:visible="handleVisibleUpdate"/>
</template>

<script setup lang="ts">
import { Button } from 'primevue';
import { ref } from 'vue';
import ModalCreateSession from '@/components/ui/ModalCreateSession.vue';
import { useActionNavigation } from '@/store/ActionNavigationStore';

const { label } = defineProps(['label']);
const visible = ref(false);
const actionTab = useActionNavigation();

const openPosition = () => {
  visible.value = true;
};

const handleVisibleUpdate = (newValue: boolean) => {
  visible.value = newValue;
};
</script>

<style scoped>
.container-btn {
  display: flex;
  justify-content: end;
  margin: 10px 0 0 0;
}

.container-item {
  margin-bottom: 2rem;
}

button {
  margin: 0 5px;
}
</style>
