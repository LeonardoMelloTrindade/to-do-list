<template>
  <Dialog v-model:visible="localVisible" :header="`Criar ${label}`" :style="{ width: '25rem' }" position="top" :modal="true"
    :draggable="false">
    <div class="container-item">
      <label for="item" class="font-semibold w-24">Nome: </label>
      <InputText variant="filled" v-model="nameGroup" :placeholder="label" id="username" :value="nameGroup" :invalid="!nameGroup"/>
    </div>
    <div class="container-btn">
      <Button type="button" label="Cancelar" severity="secondary" @click="close"></Button>
      <Button type="button" :disabled="!nameGroup" label="Salvar" @click="saveItem" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, InputText, Button } from 'primevue';
import { ref, watch } from 'vue';

const props = defineProps({
  visible: Boolean,
  label: String,
});

const emit = defineEmits(['update:visible']);

const localVisible = ref(props.visible);
const nameGroup = ref('');

watch(() => props.visible, (newValue) => {
  localVisible.value = newValue;
});

const close = () => {
  emit('update:visible', false);
  nameGroup.value = '';
};

const saveItem = () => {
  emit('update:visible', false);
  nameGroup.value = '';
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
