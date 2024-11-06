import axios from 'axios';

const API_URL = 'http://localhost:3000/agendamento';

export const escalar = async (agendamentoDto) => {
  try {
    const response = await axios.post(`${API_URL}/escalar`, agendamentoDto);
    return response.data;
  } catch (error) {
    console.error('Error in escalar:', error);
    throw error;
  }
};

export const reduzir = async (horarioDto) => {
  try {
    const response = await axios.post(`${API_URL}/reduzir`, horarioDto);
    return response.data;
  } catch (error) {
    console.error('Error in reduzir:', error);
    throw error;
  }
};

export const trocarLote = async (loteDto) => {
  try {
    const response = await axios.post(`${API_URL}/trocar-lote`, loteDto);
    return response.data;
  } catch (error) {
    console.error('Error in trocarLote:', error);
    throw error;
  }
};