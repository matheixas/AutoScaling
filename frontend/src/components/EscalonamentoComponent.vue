<template>
    <div>
       <h2>Configurar Escalonamento Manual</h2>
       <form @submit.prevent="escalarManualmente">
          <label for="instancias">Número de Instâncias:</label>
          <input type="number" v-model="numInstancias" min="1" />
 
          <button type="submit">Escalar</button>
       </form>
    </div>
 </template>
 
 <script>
 import apiService from '../services/apiService';
 
 export default {
    data() {
       return {
          numInstancias: 3,
       };
    },
    methods: {
       async escalarManualmente() {
          try {
             await apiService.escalarInstancias({ desiredCapacity: this.numInstancias });
             alert('Escalonamento realizado com sucesso!');
          } catch (error) {
             console.error(error);
             alert('Erro ao escalar instâncias');
          }
       },
    },
 };
 </script>