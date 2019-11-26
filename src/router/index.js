import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Index from '@/components/admin/Index';
import Admin from '@/components/admin/Admin';
import Novo from '@/components/admin/Novo';
import Produtos from '@/components/admin/Produtos';
import Editar from '@/components/admin/Editar';
import AdminLivros from '@/components/adminLivros/AdminLivros';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      // Rotas Pai continuam tendo um componente
      component: Index,

      // Rotas filhas
      children: [
        {
          path: '',
          name: 'AdminHome',
          component: Admin
        },
        {
          path: 'novo',
          name: 'Novo',
          component: Novo
        },
        {
          path: 'produtos',
          name: 'Produtos',
          component: Produtos
        },
        {
          path: 'editar/:id',
          name: 'Editar',
          component: Editar
        },
      ],
    },
    {
      path: '/adminLivros',
      name: 'AdminLivros',
      component: AdminLivros
    },
  ],
});