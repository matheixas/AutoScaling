import axios from 'axios';
import { escalar, reduzir, trocarLote } from './agendamentoService';

jest.mock('axios');

describe('agendamentoService', () => {
  describe('escalar', () => {
    it('should return data on successful API call', async () => {
      const mockData = { success: true };
      axios.post.mockResolvedValue({ data: mockData });

      const result = await escalar({ some: 'data' });
      expect(result).toEqual(mockData);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/agendamento/escalar', { some: 'data' });
    });

    it('should throw an error on failed API call', async () => {
      const mockError = new Error('Network Error');
      axios.post.mockRejectedValue(mockError);

      await expect(escalar({ some: 'data' })).rejects.toThrow('Network Error');
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/agendamento/escalar', { some: 'data' });
    });
  });

  describe('reduzir', () => {
    it('should return data on successful API call', async () => {
      const mockData = { success: true };
      axios.post.mockResolvedValue({ data: mockData });

      const result = await reduzir({ some: 'data' });
      expect(result).toEqual(mockData);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/agendamento/reduzir', { some: 'data' });
    });

    it('should throw an error on failed API call', async () => {
      const mockError = new Error('Network Error');
      axios.post.mockRejectedValue(mockError);

      await expect(reduzir({ some: 'data' })).rejects.toThrow('Network Error');
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/agendamento/reduzir', { some: 'data' });
    });
  });

  describe('trocarLote', () => {
    it('should return data on successful API call', async () => {
      const mockData = { success: true };
      axios.post.mockResolvedValue({ data: mockData });

      const result = await trocarLote({ some: 'data' });
      expect(result).toEqual(mockData);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/agendamento/trocar-lote', { some: 'data' });
    });

    it('should throw an error on failed API call', async () => {
      const mockError = new Error('Network Error');
      axios.post.mockRejectedValue(mockError);

      await expect(trocarLote({ some: 'data' })).rejects.toThrow('Network Error');
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/agendamento/trocar-lote', { some: 'data' });
    });
  });
});