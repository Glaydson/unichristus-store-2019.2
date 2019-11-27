import Vue from 'vue';
import Vuex from 'vuex';
import { produtoGetters, fabricanteGetters } from './getters';
import { produtoMutations, fabricanteMutations } from './mutations';
import { produtoActions, fabricanteActions } from './actions';

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
    },
    // GETTERS
    getters: Object.assign({}, produtoGetters, fabricanteGetters),
    mutations: Object.assign({}, produtoMutations, fabricanteMutations),
    actions: Object.assign({}, produtoActions, fabricanteActions),


});
