<template>
  <Button @click="openPosition(position)" severity="secondary" icon="pi pi-plus" :label="`Criar ${label}`" raised />
  <Dialog v-model:visible="visible" :header="`Criar ${label}`" :style="{ width: '25rem' }" position="top" :modal="true"
    :draggable="false">
    <div class="container-item">
      <label for="item" class="font-semibold w-24">Nome: </label>
      <InputText variant="filled" v-model="nameGroup" :placeholder="label" id="username" :value="nameGroup" :invalid="!nameGroup"/>
    </div>
    <div class="container-btn">
      <Button type="button" label="Cancelar" severity="secondary" @click="visible = false"></Button>
      <Button type="button" :disabled="!nameGroup" label="Salvar" @click="saveItem"></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Button, Dialog, InputText } from 'primevue';
import { ref } from 'vue';

const position = ref('top');
const nameGroup = ref('');
const visible = ref(false);

const openPosition = (pos: string) => {
  position.value = pos;
  visible.value = true;
};

const saveItem = () => {
  visible.value = false;
  nameGroup.value = '';
};

const { label } = defineProps(['label']);
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
