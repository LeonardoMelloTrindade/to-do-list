<template>
    <div>
        <Breadcrumb class="breadcrumb-background" :home="home" :model="path">
            <template  #item="{ item, props }">
                <router-link  v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a class="link-router" :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold ">{{ item.label }}</span>
                    </a>
                </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">                            
                        <span class="text-color">{{ item.label }}</span>
                    </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import { type PathBreadcrumb } from '@/interfaces/PathBreadcrumb';

const { path } = defineProps({
    path: {
        type: Array as PropType<PathBreadcrumb[]>, 
        required: true,
    },
});
const home = ref({
    icon: 'pi pi-home',
    route: '/',
});
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