<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <Breadcrumb class="breadcrumb-background" :home="home" :model="items">
            <template  #item="{ item, props }">
                <router-link  v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a class="link-router" :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold ">{{ item.label }}</span>
                    </a>
                </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">                            <span class="text-color">{{ item.label }}</span>
                    </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';

const { groupId, categoryId } = defineProps(['groupId', 'categoryId']);


const home = ref({
    icon: 'pi pi-home',
    route: '/',
});
const items = ref([
    { label: `Grupo#${groupId}`, route: `/group/${groupId}`},
    { label: `Categoria${categoryId}`, route: `/category/${categoryId}`},
]);
</script>

<style scoped>
.breadcrumb-background {
    margin-left: 20px;
    background-color: transparent;
}

.link-router {
    color: black;
}
</style>