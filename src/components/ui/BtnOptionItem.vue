<template>
  <div class="card flex justify-center">
    <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" rounded variant="text" aria-haspopup="true"
      aria-controls="overlay_menu" />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>

<script setup lang="ts">
import { Button, Menu } from 'primevue';
import { ref } from 'vue';

const menu = ref();
const items = ref([
  {
    label: 'Opções',
    items: [
      {
        label: 'Editar',
        icon: 'pi pi-pen-to-square',
        command: () => {
          alert('Adicionar lógica aqui');
        },
      },
      {
        label: 'Deletar',
        icon: 'pi pi-trash',
        command: () => {
          alert('Adicionar lógica aqui');
        },
      },
    ],
  },
]);

const toggle = (event: MouseEvent) => {
  menu.value.toggle(event);
};
</script>
