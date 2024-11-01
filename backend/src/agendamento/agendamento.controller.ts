import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoDto } from './dto/agendamento.dto';

@Controller('agendamento')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post('escalar')
  async escalar(@Body() agendamentoDto: AgendamentoDto) {
    try {
      console.log('Received request for escalar:', agendamentoDto);
      const result = await this.agendamentoService.escalar(agendamentoDto);
      console.log('Result for escalar:', result);
      return result;
    } catch (error) {
      console.error('Error in escalar:', error);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('reduzir')
  async reduzir(@Body() agendamentoDto: AgendamentoDto) {
    try {
      console.log('Received request for reduzir:', agendamentoDto);
      const result = await this.agendamentoService.reduzir(agendamentoDto);
      console.log('Result for reduzir:', result);
      return result;
    } catch (error) {
      console.error('Error in reduzir:', error);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('trocar-lote')
  async trocarLote(@Body() agendamentoDto: AgendamentoDto) {
    try {
      console.log('Received request for trocar-lote:', agendamentoDto);
      const result = await this.agendamentoService.trocarLote(agendamentoDto);
      console.log('Result for trocar-lote:', result);
      return result;
    } catch (error) {
      console.error('Error in trocar-lote:', error);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}