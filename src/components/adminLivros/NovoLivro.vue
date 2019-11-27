<template>
  <div>
    <div class="title">
      <h1 style="text-align: left">Novo Livro</h1>
    </div>
    <livro-form @salvar-livro="adicionaLivro" :modelo="modelo"></livro-form>
  </div>
</template>
<script>
import LivroForm from "@/components/livros/LivroForm";

export default {
  data() {
    return {
      modelo: {
        titulo: "",
        dataPublicacao: "",
        numeroPaginas: "",
        preco: "",
        autores: [],
        editora: ""
      }
    };
  },
  methods: {
    adicionaLivro(modelo) {
      // eslint-disable-next-line
      console.log("modelo", modelo);
    }
  },
  components: {
    "livro-form": LivroForm
  }
};
</script>
