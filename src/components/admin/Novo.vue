<template>
  <produto-form @salvar-produto="adicionaProduto" :modelo="modelo">
  </produto-form>
</template>
<script>
import ProdutoForm from '@/components/produtos/ProdutoForm';

export default {
  data() {
    return {
      modelo: {},
    };
  },
  methods: {
    adicionaProduto(modelo) {
       this.$store.dispatch('adicionarProduto', modelo);
       this.modelo = {};
    },
  },
  components: {
    'produto-form': ProdutoForm,
  },
};
</script>
