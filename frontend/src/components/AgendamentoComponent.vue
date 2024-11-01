<template>
  <div class="container mt-5">
    <h2 class="mb-4">Agendar Tarefa</h2>
    <form @submit.prevent="agendarEscalonamento">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome:</label>
        <input type="text" v-model="nome" id="nome" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="desiredCapacity" class="form-label">Capacidade Desejada:</label>
        <input type="number" v-model="desiredCapacity" id="desiredCapacity" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="minSize" class="form-label">Mínimo:</label>
        <input type="number" v-model="minSize" id="minSize" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="maxSize" class="form-label">Máximo:</label>
        <input type="number" v-model="maxSize" id="maxSize" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="recurrence" class="form-label">Recorrência:</label>
        <input type="number" v-model="recurrence" id="recurrence" class="form-control" disabled />
      </div>

      <div class="mb-3">
        <label for="timezone" class="form-label">Fuso Horário:</label>
        <input type="text" v-model="timezone" id="timezone" class="form-control" disabled />
      </div>

      <div class="mb-3">
        <label for="data" class="form-label">Data:</label>
        <input type="date" v-model="data" id="data" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="hora" class="form-label">Hora:</label>
        <input type="time" v-model="hora" id="hora" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Agendar</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { escalar } from '@/services/agendamentoService'; // Certifique-se de que 'escalar' está corretamente importado

export default {
  name: "EscalonamentoComponent",
  setup() {
    const toast = useToast();
    const nome = ref('');
    const desiredCapacity = ref(0);
    const minSize = ref(0);
    const maxSize = ref(0);
    const recurrence = ref(1); // Valor fixo
    const timezone = ref('America/Sao_Paulo'); // Valor fixo
    const data = ref('');
    const hora = ref('');

    const agendarEscalonamento = async () => {
      try {
        const agendamentoDto = {
          nome: nome.value,
          desiredCapacity: desiredCapacity.value,
          minSize: minSize.value,
          maxSize: maxSize.value,
          recurrence: recurrence.value,
          timezone: timezone.value,
          startTime: `${data.value}T${hora.value}:00Z`,
        };
        await escalar(agendamentoDto);
        toast.success("Escalonamento agendado com sucesso!");
      } catch (error) {
        toast.error("Erro ao agendar escalonamento.");
      }
    };

    return {
      nome,
      desiredCapacity,
      minSize,
      maxSize,
      recurrence,
      timezone,
      data,
      hora,
      agendarEscalonamento,
    };
  },
};
</script>