import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
// Imports de produtos
import Index from '@/components/admin/Index';
import Admin from '@/components/admin/Admin';
import Novo from '@/components/admin/Novo';
import Produtos from '@/components/admin/Produtos';
import Editar from '@/components/admin/Editar';
// Imports de livros
import IndexLivros from '@/components/adminLivros/IndexLivros';
import AdminLivros from '@/components/adminLivros/AdminLivros';
import NovoLivro from '@/components/adminLivros/NovoLivro';
import Livros from '@/components/adminLivros/Livros';
import EditarLivro from '@/components/adminLivros/EditarLivro';
import Detalhes from '@/components/admin/Detalhes';

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
      // Rotas Pai continuam tendo um componente
      component: IndexLivros,

      // Rotas filhas
      children: [
        {
          path: '',
          name: 'AdminLivrosHome',
          component: AdminLivros
        },
        {
          path: 'novo',
          name: 'Novo',
          component: NovoLivro
        },
        {
          path: 'livros',
          name: 'Livros',
          component: Livros
        },
        {
          path: 'editar/:id',
          name: 'Editar',
          component: EditarLivro
        },
      ],
    },
    {
      path: '/detalhes/:id',
      name: 'Detalhes',
      component: Detalhes
    }
  ],
});