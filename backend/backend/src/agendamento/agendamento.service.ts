import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AgendamentoDto } from './dto/agendamento.dto';
import { HorarioDto } from './dto/horario.dto';
import { LoteDto } from './dto/lote.dto';
import { AutoScalingClient, PutScheduledUpdateGroupActionCommand, DescribeAutoScalingGroupsCommand } from '@aws-sdk/client-auto-scaling';

@Injectable()
export class AgendamentoService {
  private autoScalingClient: AutoScalingClient;
  private readonly logger = new Logger(AgendamentoService.name);

  constructor(private configService: ConfigService) {
    const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');
    const region = this.configService.get<string>('AWS_REGION');

    this.logger.log(`AWS Access Key ID: ${accessKeyId}`);
    this.logger.log(`AWS Secret Access Key: ${secretAccessKey}`);
    this.logger.log(`AWS Region: ${region}`);

    this.autoScalingClient = new AutoScalingClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }

  async escalar(agendamentoDto: AgendamentoDto) {
    const params = {
      AutoScalingGroupName: 'nome-do-grupo',
      ScheduledActionName: 'escalar-action',
      DesiredCapacity: agendamentoDto.desiredCapacity,
      MinSize: agendamentoDto.minSize,
      MaxSize: agendamentoDto.maxSize,
      StartTime: new Date(agendamentoDto.startTime),
    };
    this.logger.log(`Escalar params: ${JSON.stringify(params)}`);
    const command = new PutScheduledUpdateGroupActionCommand(params);
    return this.autoScalingClient.send(command);
  }

  async reduzir(horarioDto: HorarioDto) {
    const params = {
      AutoScalingGroupName: 'nome-do-grupo',
      ScheduledActionName: 'reduzir-action',
      DesiredCapacity: 1,
      MinSize: 1,
      MaxSize: 10,
      StartTime: new Date(horarioDto.startTime),
    };
    this.logger.log(`Reduzir params: ${JSON.stringify(params)}`);
    const command = new PutScheduledUpdateGroupActionCommand(params);
    return this.autoScalingClient.send(command);
  }

  async testConnection() {
    try {
      const result = await this.autoScalingClient.send(new DescribeAutoScalingGroupsCommand({}));
      this.logger.log('Connection successful:', result);
      return { message: 'Connection successful', result };
    } catch (error) {
      this.logger.error('Connection failed:', error);
      return { message: 'Connection failed', error };
    }
  }

  async trocarLote(loteDto: LoteDto) {
    // Implementar lógica de troca de lote
  }
}