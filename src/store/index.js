import Vue from 'vue';
import Vuex from 'vuex';
import { produtoGetters, fabricanteGetters, livroGetters } from './getters';
import { produtoMutations, fabricanteMutations, livroMutations } from './mutations';
import { produtoActions, fabricanteActions, livroActions } from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        // ajax loader
        showLoader: false,
        // produto selecionado
        produto: {},
        // todos os produtos
        produtos: [],
        // todos os fabricantes
        fabricantes: [],
        // todos os livros
        livros: [],
        // livro selecionado
        livro: {},

    },
    // GETTERS
    getters: Object.assign({}, produtoGetters, fabricanteGetters, livroGetters),
    mutations: Object.assign({}, produtoMutations, fabricanteMutations, livroMutations),
    actions: Object.assign({}, produtoActions, fabricanteActions, livroActions),


});
