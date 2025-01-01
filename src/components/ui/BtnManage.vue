<template>
  <div class="card flex justify-center">
    <Button
      type="button"
      icon="pi pi-ellipsis-v"
      @click="toggle"
      rounded
      variant="text"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    <ConfirmDialog :group="props.id" />
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { Button, Menu } from 'primevue';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from 'primevue/useconfirm';
import { useGroupStore } from '@/store/GroupStore';
import { useTaskStore } from '@/store/TasksStore';
import { type Ativities } from '@/types/Ativitys';


const groups = useGroupStore();
const task = useTaskStore();
const confirm = useConfirm();
const menu = ref();
const props = defineProps({
  id: {
    type: String, 
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<Ativities>,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});


const toggle = (event: MouseEvent) => {
  menu.value.toggle(event);
};

const items = ref([
  {
    label: 'Opções',
    items: [
      {
        label: 'Editar',
        icon: 'pi pi-pen-to-square',
        command: () => {
          alert('Adicionar lógica de edição');
        },
      },
      {
        label: 'Deletar',
        icon: 'pi pi-trash',
        command: () => {
          showDeleteConfirmModal(props.id);
        },
      },
    ],
  },
]);
const showDeleteConfirmModal = (id: string) => {
  confirm.require({
    group: props.id,
    message: `${props.message} ${props.name}?`,
    header: 'Confirmação',
    icon: 'pi pi-info-circle',
    position: 'top',
    rejectLabel: 'Cancelar',
    acceptLabel: 'Deletar',
    accept: () => {
      switch(props.type) {
        case 'group':
          groups.deleteGroup(id);
          break;
        case 'task':
          task.deleteTasks(id);
          break;
        case 'category':
          alert('Lógica de categoria');
          break;
        default:
        throw new Error('Palavra chave errada');
      }
    },

    reject: () => {
      alert('Cancelado');
    },
  });
};
</script>
