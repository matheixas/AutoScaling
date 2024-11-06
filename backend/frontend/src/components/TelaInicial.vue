<template>
  <div class="tela-inicial">
    <h1>Bem-vindo ao Sistema de Escalonamento!</h1>
    <p>Este é o painel de controle para gerenciar escalonamentos automáticos e agendamentos.</p>
    <router-link to="/escalonamento">Ir para Escalonamento</router-link>
    <router-link to="/agendamento">Ir para Agendamento</router-link>
  </div>
</template>

<script>
export default {
  name: "TelaInicial",
};
</script>

<style scoped>
.tela-inicial {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

a {
  font-size: 1rem;
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
