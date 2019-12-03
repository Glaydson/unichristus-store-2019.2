<template>
  <div>
    <div class="title">
      <h1 style="text-align: left">Edição de Produto</h1>
    </div>
    <produto-form
      @salvar-produto="atualizarProduto"
      :modelo="modelo"
      :fabricantes="fabricantes"
      :estaEditando="true"
    ></produto-form>
  </div>
</template>
<script>
import ProdutoForm from "../../components/produtos/ProdutoForm";

export default {
  created() {
    if (!this.modelo.name) {
      this.$store.dispatch("produtoPorId", this.$route.params.id);
    }
    if (this.fabricantes.length === 0) {
      this.$store.dispatch("todosFabricantes");
    }
  },
  computed: {
    fabricantes() {
      return this.$store.getters.todosFabricantes;
    },
    modelo() {
      const produtoPorId = this.$store.getters.produto;
      return Object.assign({}, produtoPorId);
    }
  },
  methods: {
    atualizarProduto(modelo) {
      this.$store.dispatch("atualizarProduto", modelo);
      this.modelo = {};
    }
  },
  components: {
    "produto-form": ProdutoForm
  }
};
</script>

