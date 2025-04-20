<template>
  <Dialog v-model:visible="localVisible" :header="`Criar ${label}`" :style="{ width: '25rem' }" position="top" :modal="true"
    :draggable="false">
    <div class="container-item">
      <label for="item" class="font-semibold w-24">Nome: </label>
      <InputText variant="filled" v-model="inputName" :placeholder="label" id="username" :value="inputName" :invalid="!inputName"/>
    </div>
    <div class="container-btn">
      <Button type="button" label="Cancelar" severity="secondary" @click="close"></Button>
      <Button type="button" :disabled="!inputName" label="Salvar" @click="saveItem" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { useGroupStore } from '@/store/GroupStore';
import { useTaskStore } from '@/store/TasksStore';
import { Dialog, InputText, Button } from 'primevue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const storeGroups = useGroupStore();
const storeTasks = useTaskStore();
const { params } = useRoute();

const props = defineProps({
  visible: Boolean,
  label: String,
});

const emit = defineEmits(['update:visible']);

const localVisible = ref(props.visible);
const inputName = ref('');

watch(() => props.visible, (newValue) => {
  localVisible.value = newValue;
});

const close = () => {
  emit('update:visible', false);
  inputName.value = '';
};

const saveItem = () => {
  emit('update:visible', false);
  switch(props.label) {
    case 'Grupo':
      storeGroups.createGroup(inputName.value);
      break;
    case 'Categoria':
      storeGroups.createCategoryForGroup(inputName.value, params.id);
      break;
    case 'Tarefa':
      storeTasks.createTask(inputName.value, 1);
      break;
    default:
    throw new Error(`Palavra chave errada: ${props.label}`);
  }
  inputName.value = '';
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
