import { createRouter, createWebHistory } from 'vue-router';
import AgendamentoComponent from '@/components/AgendamentoComponent.vue';
import EscalonamentoComponent from '@/components/EscalonamentoComponent.vue';
import TelaInicial from '@/components/TelaInicial.vue';

const routes = [
   { path: '/agendamento', 
    name: 'Agendamento',
    component: AgendamentoComponent },
   { path: '/escalonamento', 
    name: 'Escalonamento',
    component: EscalonamentoComponent },
   {path: '/',
    name: 'TelaInicial',
    component: TelaInicial}
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
