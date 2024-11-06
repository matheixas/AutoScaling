import { Injectable } from '@nestjs/common';
import { AutoScalingClient, PutScheduledUpdateGroupActionCommand } from '@aws-sdk/client-auto-scaling';
import { AgendamentoDto } from './dto/agendamento.dto';
import { v4 as uuidv4 } from 'uuid'; // Adicione esta importação para gerar UUIDs

@Injectable()
export class AgendamentoService {
  private autoScalingClient: AutoScalingClient;

  constructor() {
    this.autoScalingClient = new AutoScalingClient({
      region: process.env.AWS_REGION, // Use a variável de ambiente
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async escalar(agendamentoDto: AgendamentoDto) {
    const command = new PutScheduledUpdateGroupActionCommand({
      AutoScalingGroupName: agendamentoDto.autoScalingGroupName,
      ScheduledActionName: `escalar-action-${uuidv4()}`, // Adicione um identificador único
      DesiredCapacity: agendamentoDto.desiredCapacity,
      MinSize: agendamentoDto.minSize,
      MaxSize: agendamentoDto.maxSize,
      StartTime: new Date(agendamentoDto.startTime),
    });

    try {
      const result = await this.autoScalingClient.send(command);
      return { success: true, result };
    } catch (error) {
      console.error('Error in escalar:', error);
      throw error;
    }
  }

  async reduzir(agendamentoDto: AgendamentoDto) {
    const command = new PutScheduledUpdateGroupActionCommand({
      AutoScalingGroupName: agendamentoDto.autoScalingGroupName,
      ScheduledActionName: `reduzir-action-${uuidv4()}`, // Adicione um identificador único
      DesiredCapacity: agendamentoDto.desiredCapacity,
      MinSize: agendamentoDto.minSize,
      MaxSize: agendamentoDto.maxSize,
      StartTime: new Date(agendamentoDto.startTime),
    });

    try {
      const result = await this.autoScalingClient.send(command);
      return { success: true, result };
    } catch (error) {
      console.error('Error in reduzir:', error);
      throw error;
    }
  }

  async trocarLote(agendamentoDto: AgendamentoDto) {
    const command = new PutScheduledUpdateGroupActionCommand({
      AutoScalingGroupName: agendamentoDto.autoScalingGroupName,
      ScheduledActionName: `trocar-lote-action-${uuidv4()}`, // Adicione um identificador único
      DesiredCapacity: agendamentoDto.desiredCapacity,
      MinSize: agendamentoDto.minSize,
      MaxSize: agendamentoDto.maxSize,
      StartTime: new Date(agendamentoDto.startTime),
    });

    try {
      const result = await this.autoScalingClient.send(command);
      return { success: true, result };
    } catch (error) {
      console.error('Error in trocarLote:', error);
      throw error;
    }
  }
}